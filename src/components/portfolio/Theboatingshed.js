import React from 'react'
import PropTypes from 'prop-types'
import BoatImage from './../../img/portfolio/boatingshed.png'


class Theboatingshed extends React.Component {
	render() {
		return (
			<div>
				<h1>The Boating Shed</h1>				
				<div className="portfolioContainer">
					<div className="portfolioImageContainer">
						<a href="http://theboatingshed.com/" target="_blank"><img src={BoatImage} className="portfolioImages"/> </a>
					</div>
					<div className="portfolioDescriptionContainer">						
						<p> Boat Service and Sales Company Website</p>
						<h4>Project: <a href="http://theboatingshed.com/" target="_blank" className="clientLink">The Boating Shed Website</a></h4>
						<h4>Client: <a href="http://theboatingshed.com/" target="_blank" className="clientLink">The Boating Shed</a></h4>
						<h4>Tech: Wordpress</h4>					
					</div>
				</div>
			</div>
		)
	}
}

Theboatingshed.propTypes = {

};
export default Theboatingshed;
