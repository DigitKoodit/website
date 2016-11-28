import alt from '../alt';
import BasicInfoActions from './BasicInfoActions';

class BasicInfoStore {
  constructor() {
    this.bindActions(BasicInfoActions);
  }

}

export default alt.createStore(BasicInfoStore);