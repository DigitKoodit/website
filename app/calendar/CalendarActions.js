import alt from '../alt'; // Alt is the Dispatcher in Flux architecture

class CalendarActions {
	constructor() {
		this.generateActions(
			'onGetCalendarEventsSuccess',
			'onGetCalendarEventsFail'
		);
	}

	getCalendarEvents() {
		$.ajax({url: '/api/calendarEvents'})
			.done((data) => {
				this.actions.onGetCalendarEventsSuccess(data)
			})
			.fail((jqXhr) => {
				this.actions.onGetCalendarEventsFail(jqXhr)
			});
	}
}

export default alt.createActions(CalendarActions);
