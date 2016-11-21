import React from 'react';
import {Link} from 'react-router';
import NavbarStore from './NavbarStore';
import NavbarActions from './NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }


  componentDidMount() {
    NavbarStore.listen(this.onChange);

    $(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
  
  }

  render() {
    return (
      <div>


      <button type="button" class="btn btn-default">Default</button>
        <div className="navbar navbar-info">
          <Link to='/'>
            <img id='logo' src='/public/img/logo_yellow.png' alt="logo" />
          </Link>
        </div>
        <div className="container">
          <h2 className="intro-light">Turun yliopiston diplomi-insinööriopiskelijoiden ainejärjestö</h2>
          <h2 className="intro">Teekkariperinteitä Turussa jo vuodesta 1999</h2>
        </div>
        <div id="navbar">
          <ul role="navigation">
            <li><a href='/perseesseen'>Etusivu</a></li>
            <li><Link to='/perustietoa'>Digit ry</Link></li>
            <li><Link to='/opiskelu'>Opiskelu</Link></li>
            <li><Link to='/toiminta'>Toiminta</Link></li>
            <li><Link to='/teekkarius'>Teekkarius</Link></li>
            <li><Link to='/ilmoittaudu'>Ilmoittaudu</Link></li>
          </ul>
        </div>
       </div>
    );
  }
}

export default Navbar;