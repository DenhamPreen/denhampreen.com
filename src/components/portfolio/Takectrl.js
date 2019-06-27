import React from 'react'
import PropTypes from 'prop-types'
import TakeControlImage from './../../img/portfolio/takecontrol.png'


class TakeControl extends React.Component {
	render() {
		return (
			<div>
				<h1>Take Ctrl</h1>				
				<div className="portfolioContainer">
					<div className="portfolioImageContainer">
						<a href="https://www.takectrl.co.za/" target="_blank"><img src={TakeControlImage} className="portfolioImages"/> </a>
					</div>
					<div className="portfolioDescriptionContainer">						
						<p> Consulting on frontend development for Take Ctrl Insurance App. Awarded 2018 MTN app of the year. </p>
						<h4>Project: <a href="https://www.takectrl.co.za/" target="_blank" className="clientLink">TakeCtrl.co.za</a></h4>
						<h4>Client: <a href="https://www.takectrl.co.za/" target="_blank" className="clientLink">Take Ctrl</a></h4>
						<h4>Tech: Ionic</h4>					
					</div>
				</div>
			</div>
		)
	}
}

TakeControl.propTypes = {

};
export default TakeControl;
