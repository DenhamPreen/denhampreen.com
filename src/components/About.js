import React from 'react'
import PropTypes from 'prop-types'
import HandWaveImage from './../img/waving.png'
import ThankYouImage from './../img/thankyou.png'
import NailPolishImage from './../img/nailpolish.png'
import WorkingImage from './../img/working.png'
import SouthAfricaImage from './../img/southafrica.png'
import ComputerImage from './../img/computer.png'
import MeImage from './../img/me.png'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import ContactPage from './Contact'

class About extends React.Component {
	render() {
		return (
			<div>

				<div className="AboutDescription">
					<h1>About Me</h1>

					<div className="AboutMe">
						{/*<h3 >Hello 
							<img src={HandWaveImage} width="20rem" className="emoji"/>
							<img src={MeImage} className="me-image"/> 
						</h3>
							*/}
						<p>Location: The beautiful city of Cape Town
							<img src={SouthAfricaImage} width="18rem" className="emoji"/>	
						</p>
						<h3>Who am I?</h3>
						<p>I am a freelance full stack software developer.
							<img src={ComputerImage} width="18rem" className="emoji"/>	
							.</p>
						<h3>What do I do?</h3>
						<p>I build exciting passion driven applications. I develop web, desktop and mobile applications
							<img src={WorkingImage} width="18rem" className="emoji"/>	
							. I'm always interested in new projects, drop me a <Link to="/contact/" className="clientLink">message</Link> if you're wondering how to go about building your application</p>
						<h3>How do I do it?</h3>
						<p>I have 4 years of studies under my belt from Rhodes University and the University of Cape Town 
							<img src={ThankYouImage} width="18rem" className="emoji"/> and 2 years of experience.	
						</p>
						<h3>Why do I do it? </h3>
						<p>Passion baby, passion.						
						</p>
					</div>
				</div>
				<Route path="/contact/" component={() => <ContactPage/>}/>

			</div>
		);
	}
}

About.propTypes = {

};
export default About;
