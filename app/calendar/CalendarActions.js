import alt from '../alt'; // Alt is the Dispatcher in Flux architecture

class CalendarActions {
	constructor() {
		this.generateActions(
			'onGetCalendarEventsSuccess',
			'onGetCalendarEventsFail'
		);
	}

	tryFetchingCalendar() {
		let timeMin = new Date().toISOString();
		return fetch("https://www.googleapis.com/calendar/v3/calendars/51n4vtv46paes63es2ddea3vgg%40group.calendar.google.com/events?maxResults=4&orderBy=startTime&singleEvents=true&timeMin=" + timeMin + "&fields=items%2Csummary&key=AIzaSyBE5UIEKN3IZQkHwBfpHlCk4EA47BJizPU")
			.then((response) => response.json())
			.then((responseJson) => {
				this.actions.onGetCalendarEventsSuccess(responseJson.events);
			})
			.catch((error) => {
				this.actions.onGetCalendarEventsFail({ error: "fail" });
			});
	}

	getCalendarEvents() {
		$.ajax({ url: '/api/calendarEvents' })
			.done((data) => {
				this.actions.onGetCalendarEventsSuccess(data)
			})
			.fail((jqXhr) => {
				this.actions.onGetCalendarEventsFail(jqXhr)
			});
	}
}

export default alt.createActions(CalendarActions);


