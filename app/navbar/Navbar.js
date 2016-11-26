import React from 'react';
import { Link } from 'react-router';
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
        <nav className="navbar navbar-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <p>Turun yliopiston diplomi-insinööriopiskelijoiden ainejärjestö</p>
              <h5>Teekkariperinteitä Turussa jo vuodesta 1999</h5>
            </div>
            <div className="navbar-right">
              <ul className="nav navbar-nav hidden-xs hidden-sm">
                <li>
                  <a href="#"><span></span>Tapahtumat</a>
                </li>
                <li>
                  <a href="#"><span></span>Sosiaalinen media</a>
                </li>
                <li>
                  <a href="#"><span></span>Yhteystiedot</a>
                </li>
                <li>
                  <a href="#"><span></span><span className="glyphicon glyphicon-search"></span></a>
                </li>
                <li>
                  <a href="#"><span></span><span className="glyphicon glyphicon-user"></span></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-inverse navbar-mid" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Digit ry</a>
            </div>
            <div className="nav-justified">
              <ul className="nav navbar-nav mid-nav">
                <li>
                  <a className="mid-nav-active" href="#">Etusivu</a>
                </li>
                <li>
                  <a href="#">Perustietoa</a>
                </li>
                <li>
                  <a href="#">Toiminta</a>
                </li>
                <li>
                  <a href="#">Opiskelu</a>
                </li>
                <li>
                  <a href="#">Teekkarius</a>
                </li>
                <li>
                  <a href="#">Ilmoittaudu</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;