import React from 'react';
import { Link } from 'react-router'; // For internal navigation between routes
import connectToStores from 'alt-utils/lib/connectToStores';
import FooterStore from './FooterStore';
import FooterActions from './FooterActions';

// Class is using Flux architecture 
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = FooterStore.getState();
        this.onChange = this.onChange.bind(this); // bind() binds the scopes function "onChange" not the React component's
    }

    componentDidMount() {
        FooterStore.listen(this.onChange);
    }

    componentWillUnmount() {
        FooterStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row text-centered">
                        <h4>Seuraa meitä:</h4>

                        <div className="col-lg-4 col-centered">
                            <span className="fa-stack fa-3x">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                            </span>
                            <span className="fa-stack fa-3x">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                            </span>
                            <span className="fa-stack fa-3x">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
                            </span>
                            <span className="fa-stack fa-3x">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                    </div>
                    <br />
                    <div className="row row-sm-flex-center text-centered">
                        <hr className="line" />
                        <img src="/public/img/digit_small.png"/>
                        <hr className="line" />
                    </div>

                    <br />
                    <div className="row">
                        <div className="col-lg-9 col-centered text-centered">
                            <ul>
                                <li><p>Copyright &copy; Digit ry 1999-2016</p></li>
                                <li><p><Link to={'/palaute/'}>Palaute</Link></p></li>
                                <li><p>|</p></li>
                                <li><p><Link to={'/yhteystiedot/'}>Yhteystiedot</Link></p></li>
                                <li><p>|</p></li>
                                <li><p><Link to={'/webcam/'}>Webcam</Link></p></li>
                                <li><p>|</p></li>
                                <li><p><a href='http://wiki.digit.fi/'>DigiWiki</a></p></li>
                                <li><p>|</p></li>
                                <li><p><Link to={'/intra'}>Digit intranet</Link></p></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;