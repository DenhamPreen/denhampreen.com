import React from "react"
import './../style.css'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import { Container, Row, Col } from 'reactstrap'
import AboutPage from './About'
import PortfolioRouterPage from './PortfolioRouter'
import ContactPage from './Contact'

class AppRouter extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Router>
				<Container>
					<Row>
						<Col md="3">		
							<nav className="navigation">
								<NavLink exact={true} activeClassName="is-active" to="/" className="navItem">About </NavLink>		
								<NavLink to="/portfolio/" activeClassName="is-active" className="navItem">Portfolio</NavLink>
								<NavLink to="/contact/" activeClassName="is-active" className="navItem">Contact</NavLink>						
							</nav>
						</Col>
						<Col md="9" style={{paddingTop:'1rem'}}>
							<Route path="/" exact component={() => <AboutPage/>} />
							<Route path="/portfolio/" component={() => <PortfolioRouterPage 							handleOpening = {this.props.handleOpening}
																		   handleClosing = {this.props.handleClosing}
																		   iconSize = {this.props.iconSize}
																		   singularPortfolio = {this.props.singularPortfolio}
																		   />} />
							<Route path="/contact/" component={() => <ContactPage/>} />
						</Col>
					</Row>
				</Container>
			</Router>
		);
	}
}

AppRouter.propTypes = {
	handleOpening: PropTypes.func.isRequired,
	handleClosing: PropTypes.func.isRequired,
	iconSize: PropTypes.number.isRequired,
	singularPortfolio: PropTypes.bool.isRequired,
};

export default AppRouter;