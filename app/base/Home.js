import React from 'react';
import { Link } from 'react-router';
import { first, without, findWhere } from 'underscore';
import Calendar from '../calendar/Calendar';

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
      <div>
        <header className="image-bg-fixed-height">
        </header>
        <section>
          <div className="container">
            <div className="row vertical-center">
              <div className="col-sm-12 col-md-8 col-md-push-4">
                <h2>Digit ry</h2>
                <p className="section-paragraph">Digit ry on Turun yliopiston tietotekniikan, tietoliikennetekniikan ja elektroniikan
diplomi-insinööriopiskelijoiden ainejärjestö, perustettu syksyllä 1999 ja se on edelleen yksi Suomen nuorimmista teekkarikilloista.</p>
                <p className="section-paragraph">Jäseniä meillä on tällä hetkellä jo pitkälti kolmatta sataa ja kasvaneen aloituspaikkamäärän myötä tulemme kasvamaan nopeasti myös jatkossa.</p>
                <p className="section-paragraph">Nuoruudesta ja pienestä koosta johtuen Digit on hyvin dynaaminen ja ympäristöönsä sopeutuva yhdistys, jolla on myös hyvät ja aktiiviset suhteet muihin Turun seudun it-alan opiskelijajärjestöihin. Tutustu tarkemmin.</p>
              </div>
              <div className="col-md-1 visible-md-block visible-lg-block col-md-pull-5">
                <span className="vertical-separator"></span>
              </div>
              <div className="col-sm-12 col-md-3 col-md-pull-9">
                <Calendar />
              </div>

            </div>
          </div>
        </section>
        <section className="dark-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-3">
                <h2>Yhteistyökumppanit</h2>
              </div>
              <div className="col-md-1 visible-md-block visible-lg-block">
                <span className="vertical-separator"></span>
              </div>
              <div className="col-sm-12 col-md-8">
                <h2>Uutiset</h2>
              </div>
            </div>
          </div>
        </section>
        <br/>
        <div className="container">
          <div className="row text-centered">
            <h4>Seuraa meitä:</h4>
            <br />
            <div className="col-lg-4 col-centered">
              <a href="https://www.facebook.com/digitry/?fref=ts">
                <span className="fa-stack fa-3x">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a href="https://www.instagram.com/digitteekkari/">
                <span className="fa-stack fa-3x">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a href="https://lists.utu.fi/mailman/listinfo/diginfo">
                <span className="fa-stack fa-3x">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a href="https://github.com/DigitKoodit">
                <span className="fa-stack fa-3x">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;