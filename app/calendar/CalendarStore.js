import alt from '../alt';
import CalendarActions from './CalendarActions';
import CalendarSource from './CalendarSource.js';

class CalendarStore {
  constructor() {
    this.bindActions(CalendarActions);
    this.events = [];

    this.exportAsync(CalendarSource);
  }

  onGetCalendarEventsSuccess(data) {
    this.events = data;
  }

  onGetCalendarEventsFail(jqXhr) {
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }
}

export default alt.createStore(CalendarStore);