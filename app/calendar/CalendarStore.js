import alt from '../alt';
import CalendarActions from './CalendarActions';

class CalendarStore {
  constructor() {
    this.bindActions(CalendarActions);
    this.events = [];
  }

  onGetCalendarEventsSuccess(data) {
    this.events = data.events;
  }

  onGetCalendarEventsFail(data) {
    this.events = data;
  }
}

export default alt.createStore(CalendarStore);