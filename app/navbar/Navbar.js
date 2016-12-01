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
                  <a href="#"><span></span><i className="fa fa-search fa-2" aria-hidden="true"></i>
</a>
                </li>
                <li>
                  <a href="#"><span></span><i className="fa fa-user fa-2" aria-hidden="true"></i></a>
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
                  <Link to='/'>Etusivu</Link>
                </li> 
                <li>
                  <Link to='/perustietoa'>Perustietoa</Link>
                </li>
                <li>
                  <Link to='/toiminta'>Toiminta</Link>
                </li>
                <li>
                  <Link to='/opiskelu'>Opiskelu</Link>
                </li>
                <li>
                  <Link to='/teekkarius'>Teekkarius</Link>
                </li>
                <li>
                  <Link to='/ilmoittaudu'>Ilmoittaudu</Link>
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