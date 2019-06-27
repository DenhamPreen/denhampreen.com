import React from 'react'
import PropTypes from 'prop-types'
import MeatlessmayImage from './../../img/portfolio/meatlessmay.gif'


class Meatlessmay extends React.Component {
	render() {
		return (
			<div>
				<h1>MeatLessMay</h1>				
				<div className="portfolioContainer">
					<div className="portfolioImageContainer">
						<a href="http://meatlessmay.me/" target="_blank"><img src={MeatlessmayImage} className="portfolioImages"/> </a>
					</div>
					<div className="portfolioDescriptionContainer">						
						<p> MeatLessMay is a behavioural change campaign aimed at challenging individuals consumption habits of meat and animal products and raising awareness on sustainability concerns around the meat industry.</p>
						<h4>Project: <a href="http://meatlessmay.me/" target="_blank" className="clientLink">MeatLessMay.me</a></h4>
						<h4>Client: <a href="https://planttheseed.co.za/" target="_blank" className="clientLink">Sustainable Brothers and Sisters</a></h4>
						<h4>Tech: React, AWS, Nodejs, DynamoDB</h4>					
					</div>
				</div>
			</div>
		)
	}
}

Meatlessmay.propTypes = {

};
export default Meatlessmay;
