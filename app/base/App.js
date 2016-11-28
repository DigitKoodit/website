import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';



class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

export default App;