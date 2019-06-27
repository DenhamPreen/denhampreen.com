import React from 'react'
import PropTypes from 'prop-types'
import MecMoviesImage from './../../img/portfolio/uct.gif'


class Mecmovies extends React.Component {
	render() {
		return (
			<div>
				<h1>MecMovies Online Course Conversion</h1>				
				<div className="portfolioContainer">
					<div className="portfolioImageContainer">
						<img src={MecMoviesImage} className="portfolioImages"/>
					</div>
					<div className="portfolioDescriptionContainer">						
						<p>Mechanical Engineering Online Course conversion and student participation tracking </p>
						<h4>Project: MecMovies Online Course Conversion</h4>
						<h4>Client: <a href="http://www.ebe.uct.ac.za/ebe/study/mecheng" target="_blank" className="clientLink">Engineering Department - University of Cape Town</a></h4>
						<h4>Tech: HTML5, PHP, MySQL, Material, Tsugi</h4>					
					</div>
				</div>
			</div>
		)
	}
}

Mecmovies.propTypes = {

};
export default Mecmovies;
