import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Calendar from '../calendar/Calendar';



class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<header className="image-bg-fixed-height">
					
				</header>

				<section>
					<div className="container">
						<div className="row vertical-center">
							<div className="col-sm-12 col-md-3">
								<Calendar/>
							</div>
							<div className="col-md-1 visible-md-block visible-lg-block">
								<span className="vertical-separator"></span>
							</div>
							<div className="col-sm-12 col-md-8">
								<h2>Digit ry</h2>
								<p className="section-paragraph">Digit ry on Turun yliopiston tietotekniikan, tietoliikennetekniikan ja elektroniikan
diplomi-insinööriopiskelijoiden ainejärjestö, perustettu syksyllä 1999 ja se on edelleen yksi Suomen nuorimmista teekkarikilloista.</p>
								<p className="section-paragraph">Jäseniä meillä on tällä hetkellä jo pitkälti kolmatta sataa ja kasvaneen aloituspaikkamäärän myötä tulemme kasvamaan nopeasti myös jatkossa.</p>
								<p className="section-paragraph">Nuoruudesta ja pienestä koosta johtuen Digit on hyvin dynaaminen ja ympäristöönsä sopeutuva yhdistys, jolla on myös hyvät ja aktiiviset suhteet muihin Turun seudun it-alan opiskelijajärjestöihin. Tutustu tarkemmin.</p>
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

				<Footer />
			</div>
		);
	}
}

export default App;