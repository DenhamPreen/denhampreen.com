import React from 'react'
import PropTypes from 'prop-types'
import LittlelotusImage from './../../img/portfolio/littlelotus.png'


class Littlelotus extends React.Component {
	render() {
		return (
			<div>
				<h1>Little Lotus</h1>				
				<div className="portfolioContainer">
					<div className="portfolioImageContainer">
						<a href="http://littlelotus.co.za/" target="_blank" className="clientLink">
						<img src={LittlelotusImage} className="portfolioImages"/>
						</a>
					</div>
					<div className="portfolioDescriptionContainer">						
						<p>Little Lotus is a bohemian styled online clothing shop</p>
						<h4>Project: <a href="http://littlelotus.co.za/" target="_blank" className="clientLink">Little Lotus Online Shop</a></h4>
						<h4>Client: <a href="http://littlelotus.co.za/" target="_blank" className="clientLink">Little Lotus</a></h4>
						<h4>Tech: Wordpress, Woocommerce </h4>					
					</div>
				</div>
			</div>
		)
	}
}

Littlelotus.propTypes = {

};

export default Littlelotus;