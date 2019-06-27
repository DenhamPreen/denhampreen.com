import React from 'react'
import PropTypes from 'prop-types'
import PlasticDetoxImage from './../../img/portfolio/plasticdetox.png'


class Plasticdetox extends React.Component {
	render() {
		return (
			<div>
				<h1>Plastic Detox</h1>				
				<div className="portfolioContainer">
					<div className="portfolioImageContainer">
						<a href="http://plasticdetox.me/" target="_blank"><img src={PlasticDetoxImage} className="portfolioImages"/> </a>
					</div>
					<div className="portfolioDescriptionContainer">						
						<p> PlasticDetox is a plastic awareness and environmental rights advocacy campaign that challenges citizens to commit to a more sustainable lifestyle.</p>
						<h4>Project: <a href="http://plasticdetox.me/" target="_blank" className="clientLink">PlasticDetox.me</a></h4>
						<h4>Client: <a href="https://planttheseed.co.za/" target="_blank" className="clientLink">Plant The Seed</a></h4>
						<h4>Tech: React, AWS, Nodejs, DynamoDB</h4>					
					</div>
				</div>
			</div>
		)
	}
}

Plasticdetox.propTypes = {

};
export default Plasticdetox;
