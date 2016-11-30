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
    this.events = data.events;
  }

  onGetCalendarEventsFail(data) {
    this.events = data;
  }
}

export default alt.createStore(CalendarStore);