import React from 'react'
import PropTypes from 'prop-types'
import CheckMyPasswordImage from './../../img/portfolio/password.png'


class Checkmypassword extends React.Component {
	render() {
		return (
			<div>
				<h1>Check My Password</h1>				
				<div className="portfolioContainer">
					<div className="portfolioImageContainer">
						<a href="https://chrome.google.com/webstore/detail/check-my-password/hfkkdbocalihgkgniglgildacnnfknke?hl=en" target="_blank" className="clientLink">
						<img src={CheckMyPasswordImage} className="portfolioImages"/>
						</a>
					</div>
					<div className="portfolioDescriptionContainer">						
						<p>This basic chrome extension is designed to let you check the password you typed into the password box so you can be sure you entered the correct password. By adding this extension you can view the password as text on any website</p>
						<h4>Project: <a href="https://chrome.google.com/webstore/detail/check-my-password/hfkkdbocalihgkgniglgildacnnfknke?hl=en" target="_blank" className="clientLink">Check My Password</a></h4>
						<h4>Client: Self</h4>
						<h4>Tech: HTML5, CSS, Chrome Extensions </h4>					
					</div>
				</div>
			</div>
		)
	}
}

Checkmypassword.propTypes = {

};

export default Checkmypassword;