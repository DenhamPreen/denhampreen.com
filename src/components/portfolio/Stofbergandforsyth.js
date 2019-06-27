import React from 'react'
import PropTypes from 'prop-types'
import StofbergImage from './../../img/portfolio/stofberg.png'


class Stofbergandforsyth extends React.Component {
	render() {
		return (
			<div>
				<h1>Stofberg and Forsyth Attorneys</h1>				
				<div className="portfolioContainer">
					<div className="portfolioImageContainer">
						<a href="http://sandf.co.za/" target="_blank"><img src={StofbergImage} className="portfolioImages"/> </a>
					</div>
					<div className="portfolioDescriptionContainer">						
						<p> Stofberg & Forsyth Attorneys is an innovative boutique firm, with secluded offices located in Pietermaritzburg.</p>
						<h4>Project: <a href="http://sandf.co.za/" target="_blank" className="clientLink">Stofberg and Forsyth Attorneys Website</a></h4>
						<h4>Client: <a href="http://sandf.co.za/" target="_blank" className="clientLink">Stofberg & Forsyth Attorneys</a></h4>
						<h4>Tech: Wordpress</h4>					
					</div>
				</div>
			</div>
		)
	}
}

Stofbergandforsyth.propTypes = {

};
export default Stofbergandforsyth;
