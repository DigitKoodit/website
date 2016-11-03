import React from 'react';
import {Link} from 'react-router';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(character) {
  }

  render() {
    return (
      <div className='container'>
        <h3 className='text-center'>Click on the portrait. Select your favorite.</h3>
      </div>
    );
  }
}

export default Home;