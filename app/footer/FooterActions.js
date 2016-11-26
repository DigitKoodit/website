import alt from '../alt'; // Alt is the Dispatcher in Flux architecture

class FooterActions {
	constructor() {
		this.generateActions(
			'onCopyrightTextSuccess',
		);
	}

	getCopyrightText() {
		var year = new Date().getFullYear();
		let copyrightText = "Copyright © Digit ry 1999-" + year;
		this.actions.onCopyrightTextSuccess(copyrightText);
	}
}

export default alt.createActions(FooterActions);
