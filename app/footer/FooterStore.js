import alt from '../alt';
import FooterActions from './FooterActions';

class FooterStore {
  constructor() {
    this.bindActions(FooterActions);
    this.copyrightText = "";
  }

  onCopyrightTextSuccess(copyrightText) {
    this.copyrightText = copyrightText;
  }
}

export default alt.createStore(FooterStore);