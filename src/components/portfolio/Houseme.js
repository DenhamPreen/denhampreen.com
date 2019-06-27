import React from 'react'
import PropTypes from 'prop-types'
import HousemeImage from './../../img/portfolio/houseme.png'


class Houseme extends React.Component {
	render() {
		return (
			<div>
				<h1>HouseME</h1>				
				<div className="portfolioContainer">
					<div className="portfolioImageContainer">
						<a href="https://house.me/" target="_blank"><img src={HousemeImage} className="portfolioImages"/> </a>
					</div>
					<div className="portfolioDescriptionContainer">						
						<p> Landing website for Cape Town's number 1 start up of 2018. HouseME is a digital platform that not only connects dream tenants to great landlords, but also facilitates a mutually beneficial relationship between them – resulting in fair prices, support, transparency and reduced risk for both parties. It’s the new, easy and smart way to rent. </p>
						<h4>Project: <a href="https://house.me/" target="_blank" className="clientLink">House.ME</a></h4>
						<h4>Client: <a href="https://house.me/" target="_blank" className="clientLink">HouseME</a></h4>
						<h4>Tech: HTML 5, CSS, Bootstrap</h4>					
					</div>
				</div>
			</div>
		)
	}
}

Houseme.propTypes = {

};
export default Houseme;
