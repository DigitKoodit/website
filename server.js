// Babae ES6/JSX Compiler
require('babel-register');

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var swig = require('swig'); //Swig is HTML template engine.
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');

var async = require('async');
var request = require('request');
var _ = require('underscore');

var google = require('googleapis');
var googleAuth = require('google-auth-library');
var fs = require('fs');
var readline = require('readline');


// The main server application
var app = express();

/**
 * Database PostgreSQL
 */
var db = require('./queries');

// Basic setup
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Google calendar 

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/calendar-nodejs-quickstart.json
var SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
	process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'calendar-nodejs-quickstart.json';

var oauth2Client;
// Load client secrets from a local file.
fs.readFile('client_secret.json', function processClientSecrets(err, content) {
	if (err) {
		console.log('Error loading client secret file: ' + err);
		return;
	}
	// Authorize a client with the loaded credentials, then call the
	// Google Calendar API.
	calendarAuth = JSON.parse(content);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback, res) {
	var clientSecret = credentials.installed.client_secret;
	var clientId = credentials.installed.client_id;
	var redirectUrl = credentials.installed.redirect_uris[0];
	var auth = new googleAuth();
	var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

	// Check if we have previously stored a token.
	fs.readFile(TOKEN_PATH, function (err, token) {
		if (err) {
			getNewToken(oauth2Client, callback);
		} else {
			oauth2Client.credentials = JSON.parse(token);
			callback(oauth2Client, res);
		}
	});
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
	var authUrl = oauth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: SCOPES
	});
	console.log('Authorize this app by visiting this url: ', authUrl);
	var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.question('Enter the code from that page here: ', function (code) {
		rl.close();
		oauth2Client.getToken(code, function (err, token) {
			if (err) {
				console.log('Error while trying to retrieve access token', err);
				return;
			}
			oauth2Client.credentials = token;
			storeToken(token);
			callback(oauth2Client);
		});
	});
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
	try {
		fs.mkdirSync(TOKEN_DIR);
	} catch (err) {
		if (err.code != 'EEXIST') {
			throw err;
		}
	}
	fs.writeFile(TOKEN_PATH, JSON.stringify(token));
	console.log('Token stored to ' + TOKEN_PATH);
}


/**
 * Lists the next 10 events on the user's primary calendar.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listEvents(auth, res) {
	var calendar = google.calendar('v3');
	calendar.events.list({
		auth: auth,
		calendarId: '51n4vtv46paes63es2ddea3vgg@group.calendar.google.com', // Digit event calendar id
		timeMin: (new Date()).toISOString(),
		maxResults: 4,
		singleEvents: true,
		orderBy: 'startTime'
	}, function (err, response) {
		if (err) {
			console.log('The API returned an error: ' + err);
			return;
		}
		var events = response.items;
		var eventsSimple = { events: [] };
		if (events.length == 0) {
			eventsSimple = { result: 'No upcoming events found.' };
		} else {
			for (var i = 0; i < events.length; i++) {
				var event = events[i];
				var start = event.start.dateTime || event.start.date;
				eventsSimple.events.push({
					name: event.summary,
					start: start
				});
			}
		}
		res.send(eventsSimple);
	});
}

app.get('/api/calendarEvents', function (req, res) {
	authorize(calendarAuth, listEvents, res);
});

// PostgreSQL Queries
app.get('/api/products', db.getMMProducts);


///// Starting the server ////////

// app.use(function (req, res) {
// 	Router.match({ routes: routes.default, location: req.url }, function (err, redirectLocation, renderProps) {
// 		if (err) {
// 			res.status(500).send(err.message)

// 		} else if (redirectLocation) {
// 			res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)

// 		} else if (renderProps) {
// 			var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
// 			var page = swig.renderFile('views/index.html', { html: html });
// 			res.status(200).send(page);

// 		} else {
// 			res.status(404).send('Page Not Found')
// 		}
// 	});
// });


// app.use(express.static(__dirname));

app.use(function (req, res) {
	Router.match({ routes: routes.default, location: req.url }, function (err, redirectLocation, renderProps) {
		if (err) {
			res.status(500).send(err.message)
		} else if (redirectLocation) {
			res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
		} else if (renderProps) {
			var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
			var page = swig.renderFile('views/index.html', { html: html });
			res.status(200).send(page);
		} else {
			
			res.status(404).send('Page Not Found')
		}
	});
});

app.listen(app.get('port'), function () {
	console.log('Digit server listening on port ' + app.get('port'));
});
