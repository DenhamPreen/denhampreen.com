import React from 'react'
import PropTypes from 'prop-types'
import CapitecImage from './../../img/portfolio/capitec.png'


class Capitec extends React.Component {
	render() {
		return (
			<div>
				<h1>Capitec - Money and Me</h1>				
				<div className="portfolioContainer">
					<div className="portfolioImageContainer">
						<a href="https://www.capitecbank.co.za/" target="_blank" className="clientLink">
							<img src={CapitecImage} className="portfolioImages"/>
						</a>
					</div>
					<div className="portfolioDescriptionContainer">						
						<p> A financial survey to analyse and create a dynamic report to assist Capitec's clients on better spending.</p>
						<h4>Project: Capitec - Money and Me</h4>
						<h4>Client: <a href="https://www.capitecbank.co.za/" target="_blank" className="clientLink">Capitec</a></h4>
						<h4>Tech: Angular, Azure, Nodejs, DocumentDB, Express</h4>					
					</div>
				</div>
			</div>
		)
	}
}

Capitec.propTypes = {

};
export default Capitec;
