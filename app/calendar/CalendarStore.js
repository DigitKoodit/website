import alt from '../alt';
import CalendarActions from './CalendarActions';
var dateFormat = require('dateformat');

class CalendarStore {
  constructor() {
    this.bindActions(CalendarActions);
    this.events = [];
  }

  onGetCalendarEventsSuccess(data) {
    this.events = data.events.slice(0,5);
    this.events.map(function(event) {
      event.start = dateFormat(event.start, "dddd d.m.yyyy");
    })
  }

  onGetCalendarEventsFail(jqXhr) {
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }
}

export default alt.createStore(CalendarStore);