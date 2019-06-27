import React from "react"
import './../style.css'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import Portfolio from './PortfolioRouter.js'
import MeatlessmayPortfolio from './portfolio/Meatlessmay.js'
import PlasticDetoxPortfolio from './portfolio/Plasticdetox.js'
import CapitecPortfolio from './portfolio/Capitec.js'
import HouseMEPortfolio from './portfolio/Houseme.js'
import TakeCtrlPortfolio from './portfolio/Takectrl.js'
import CrsesPortfolio from './portfolio/Crses.js'
import WhenIsMyDogsBirthdayPortfolio from './portfolio/Whenismydogsbirthday.js'
import CheckMyPasswordPortfolio from './portfolio/Checkmypassword.js'
import WorldMapPortfolio from './portfolio/Worldmap.js'
import LittleLotusPortfolio from './portfolio/Littlelotus.js'
import MecMoviesPortfolio from './portfolio/Mecmovies.js'
import SandPortfolio from './portfolio/Stofbergandforsyth.js'
import TheboatingshedPortfolio from './portfolio/Theboatingshed.js'
import MeatlessmayImage from './../img/portfolio/meatlessmay.gif'
import PlasticdetoxImage from './../img/portfolio/plasticdetox.png'
import CapitecImage from './../img/portfolio/capitec.png'
import HousemeImage from './../img/portfolio/houseme.png'
import TakecontrolImage from './../img/portfolio/takecontrol.png'
import CrsesImage from './../img/portfolio/crses.png'
import DogImage from './../img/portfolio/dogs.gif'
import CheckMyPasswordImage from './../img/portfolio/password.png'
import WorldMapImage from './../img/portfolio/worldmap.png'
import LittleLotusImage from './../img/portfolio/littlelotus.png'
import MecMoviesImage from './../img/portfolio/uct.gif'
import SandImage from './../img/portfolio/stofberg.png'
import BoatImage from './../img/portfolio/boatingshed.png'


class PortfolioRouter extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};

	}		
	render() {
		return (
			<div style={{overflowY:'hidden'}}>
				{
					this.props.singularPortfolio === false ?
						<div>
							<h1>Portfolio</h1>
							<div className='portfolio-container'>
								<Link to="/portfolio/plasticdetox" onClick={this.props.handleOpening}>
									<img src={PlasticdetoxImage} className="portfolioImagesItems" style={{width: this.props.iconSize + 'rem'}}/> 
								</Link>
								<Link to="/portfolio/capitec" onClick={this.props.handleOpening}>
									<img src={CapitecImage} className="portfolioImagesItems" style={{width: this.props.iconSize + 'rem'}}/> 
								</Link>
								<Link to="/portfolio/houseme" onClick={this.props.handleOpening}>
									<img src={HousemeImage} className="portfolioImagesItems" style={{width: this.props.iconSize + 'rem'}}/> 
								</Link>
								<Link to="/portfolio/takectrl" onClick={this.props.handleOpening}>
									<img src={TakecontrolImage} className="portfolioImagesItems" style={{width: this.props.iconSize + 'rem'}}/> 
								</Link>
								<Link to="/portfolio/mecmovies" onClick={this.props.handleOpening}>
									<img src={MecMoviesImage} className="portfolioImagesItems" style={{width: this.props.iconSize + 'rem'}}/> 
								</Link>
								<Link to="/portfolio/whenismydogsbirthday" onClick={this.props.handleOpening}>
									<img src={DogImage} className="portfolioImagesItems" style={{width: this.props.iconSize + 'rem'}}/> 
								</Link>
								<Link to="/portfolio/meatlessmay" onClick={this.props.handleOpening} >
									<img src={MeatlessmayImage} className="portfolioImagesItems" style={{width: this.props.iconSize + 'rem'}}/> 
								</Link>
								<Link to="/portfolio/checkmypassword" onClick={this.props.handleOpening}>
									<img src={CheckMyPasswordImage} className="portfolioImagesItems" style={{width: this.props.iconSize + 'rem'}}/> 
								</Link>
								<Link to="/portfolio/crses" onClick={this.props.handleOpening} >
									<img src={CrsesImage} className="portfolioImagesItems" style={{width: this.props.iconSize + 'rem'}}/> 
								</Link>
								<Link to="/portfolio/worldscratchmap" onClick={this.props.handleOpening}>
									<img src={WorldMapImage} className="portfolioImagesItems" style={{width: this.props.iconSize + 'rem'}}/> 
								</Link>
								<Link to="/portfolio/littlelotus" onClick={this.props.handleOpening} >
									<img src={LittleLotusImage} className="portfolioImagesItems" style={{width: this.props.iconSize + 'rem'}}/> 
								</Link>
								<Link to="/portfolio/theboatingshed" onClick={this.props.handleOpening}>
									<img src={BoatImage} className="portfolioImagesItems" style={{width: this.props.iconSize + 'rem'}}/> 
								</Link>
								<Link to="/portfolio/stofbergandforsythattorneys" onClick={this.props.handleOpening}>
									<img src={SandImage} className="portfolioImagesItems" style={{width: this.props.iconSize + 'rem'}}/> 
								</Link>
							</div>
						</div>
						: 
						<div>
						<Link to="../portfolio" onClick={this.props.handleClosing} className="back-button navItem">&#9664; back
						</Link>
					</div>
					
				}
				<Route path="/portfolio/meatlessmay" component={() => <MeatlessmayPortfolio/>} />
				<Route path="/portfolio/plasticdetox" component={() => <PlasticDetoxPortfolio/>} />
				<Route path="/portfolio/capitec" component={() => <CapitecPortfolio/>} />
				<Route path="/portfolio/houseme" component={() => <HouseMEPortfolio/>} />
				<Route path="/portfolio/takectrl" component={() => <TakeCtrlPortfolio/>} />
				<Route path="/portfolio/crses" component={() => <CrsesPortfolio/>} />
				<Route path="/portfolio/whenismydogsbirthday" component={() => <WhenIsMyDogsBirthdayPortfolio/>} />
				<Route path="/portfolio/worldscratchmap" component={() => <WorldMapPortfolio/>} />
				<Route path="/portfolio/littlelotus" component={() => <LittleLotusPortfolio/>} />
				<Route path="/portfolio/mecmovies" component={() => <MecMoviesPortfolio/>} />
				<Route path="/portfolio/stofbergandforsythattorneys" component={() => <SandPortfolio/>} />
				<Route path="/portfolio/theboatingshed" component={() => <TheboatingshedPortfolio/>} />
				<Route path="/portfolio/Checkmypassword" component={() => <CheckMyPasswordPortfolio/>} />
				{/*<Route path="/portfolio/" component={() => <Portfolio/>} /> this.props.route.path*/}
			</div>
		)}
}


PortfolioRouter.propTypes = {
	handleOpening: PropTypes.func.isRequired,
	handleClosing: PropTypes.func.isRequired,
	iconSize: PropTypes.number.isRequired,
	singularPortfolio: PropTypes.bool.isRequired,
};

export default PortfolioRouter;