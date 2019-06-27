import React from 'react'
import PropTypes from 'prop-types'
import DogImage from './../../img/portfolio/dogs.gif'


class Whenismydogsbirthday extends React.Component {
	render() {
		return (
			<div>
				<h1>When is my dogs birthday?</h1>				
				<div className="portfolioContainer">
					<div className="portfolioImageContainer">
						<a href="http://whenismydogsbirthday.com/" target="_blank" className="clientLink">
						<img src={DogImage} className="portfolioImages"/>
						</a>
					</div>
					<div className="portfolioDescriptionContainer">						
						<p>Millions of sweet puppers everywhere go unloved and uncelebrated on one of their 7 yearly birthdays. We humans forget that every time a dog ages a year, they have actually aged 7 dog years. This means that you are depriving Charlie, Bean and Coffee a birthday treat on all other of their 6 birthdays.</p>
						<h4>Project: <a href="http://whenismydogsbirthday.com/" target="_blank" className="clientLink">When is my dogs birthday</a></h4>
						<h4>Client: Self</h4>
						<h4>Tech: HTML5, Bootstrap, PHP, MySQL</h4>					
					</div>
				</div>
			</div>
		)
	}
}

Whenismydogsbirthday.propTypes = {

};
export default Whenismydogsbirthday;
