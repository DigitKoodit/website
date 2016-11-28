
var CalendarSource = {
    fetch: "fetchCalendarEvents"

}

function fetchCalendarEvents() {
    let timeMin = new Date().toISOString();
    return fetch("https://www.googleapis.com/calendar/v3/calendars/51n4vtv46paes63es2ddea3vgg%40group.calendar.google.com/events?maxResults=4&orderBy=startTime&singleEvents=true&timeMin=" + timeMin + "&fields=items%2Csummary&key=AIzaSyBE5UIEKN3IZQkHwBfpHlCk4EA47BJizPU")
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.events;
        })
        .catch((error) => {
            console.log(error);
        });
}



module.exports = CalendarSource;