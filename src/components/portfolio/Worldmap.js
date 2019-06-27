import React from 'react'
import PropTypes from 'prop-types'
import WorldmapImage from './../../img/portfolio/worldmap.png'


class Worldmap extends React.Component {
	render() {
		return (
			<div>
				<h1>World Scratch Map</h1>				
				<div className="portfolioContainer">
					<div className="portfolioImageContainer">
						<a href="https://chrome.google.com/webstore/detail/world-scratch-map/jdhckddhiiclhkcpkebhjafbjlgodopa?hl=en" target="_blank" className="clientLink">
						<img src={WorldmapImage} className="portfolioImages"/>
						</a>
					</div>
					<div className="portfolioDescriptionContainer">						
						<p>For the experienced or aspiring travelers. An online scratch map to tick off the countries you have traveled to. Something to take pride in or to motivate you to explore further. It is a chrome extension that acts as your new tab page with a google search bar that sits over the interactive map.</p>
						<h4>Project: <a href="https://chrome.google.com/webstore/detail/world-scratch-map/jdhckddhiiclhkcpkebhjafbjlgodopa?hl=en" target="_blank" className="clientLink">World Scratch Map Extension</a></h4>
						<h4>Client: Self</h4>
						<h4>Tech: React, Chrome Extensions </h4>					
					</div>
				</div>
			</div>
		)
	}
}

Worldmap.propTypes = {

};

export default Worldmap;