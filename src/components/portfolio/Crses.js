import React from 'react'
import PropTypes from 'prop-types'
import CRSESImage from './../../img/portfolio/crses.png'


class Crses extends React.Component {
	render() {
		return (
			<div>
				<h1>Energy Data Visualisation</h1>				
				<div className="portfolioContainer">
					<div className="portfolioImageContainer">
						<a href="http://academic.sun.ac.za/crsespower/index.html" target="_blank" className="clientLink">
						<img src={CRSESImage} className="portfolioImages"/>
						</a>
					</div>
					<div className="portfolioDescriptionContainer">						
						<p>The Renewable Energy Simulation Platform provides an approximate understanding of the potential of different renewable energy technologies around Southern Africa </p>
						<h4>Project: <a href="http://academic.sun.ac.za/crsespower/index.html" target="_blank" className="clientLink">Renewable Energy Simulation Platform</a></h4>
						<h4>Client: <a href="http://www.crses.sun.ac.za/" target="_blank" className="clientLink">Center for Renewable and Sustainable Energy Studies</a></h4>
						<h4>Tech: HTML5, Bootstrap, D3.js</h4>					
					</div>
				</div>
			</div>
		)
	}
}

Crses.propTypes = {

};
export default Crses;
