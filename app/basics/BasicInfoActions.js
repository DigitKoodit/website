import alt from '../alt'; // Alt is the Dispatcher in Flux architecture

class BasicInfoActions {
	constructor() {
		this.generateActions(
			'onCopyrightTextSuccess',
		);
	}
}

export default alt.createActions(BasicInfoActions);
