import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
      	<Navbar history={this.props.history}/>
        	{this.props.children}

        	moi
      </div>
    );
  }
}

export default App;