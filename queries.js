// Bluebird is promises library
// found this example from http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/#.WDSANfl96Uk
var promise = require('bluebird');

var options = {
        promiseLib: promise
};

// DB object of Digit's MordorMarket
var dbConfig = require('./config.js');


var pgp = require('pg-promise')(options);
var db = pgp(dbConfig);

module.exports = {
    getMMProducts: getMMProducts
};

function getMMProducts(req, res, next) {
    console.log("AAAAAAAAARGS");
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'MM Products'
                });
        })
    .catch(function (err) {
        return next(err);
    });
}
