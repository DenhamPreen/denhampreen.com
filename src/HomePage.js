import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'	
import AppRouter from './components/AppRouter'

class HomePage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			opacity: 1,
			opacityDay: 1,
			scrollDistance: (1000 + window.innerHeight) + 'px',
			//			linkColor: {r:187,g:187,b:255},
			linkColor: {r:253,g:255,b:208},
			textColor: {r:255,g:255,b:255},
			singularPortfolio: false,
			iconSize: 8
		};

		let lastScrollTop = 0;
	}

	handleOpening = () => {
		this.setState({
			singularPortfolio: true,
			iconSize: 3
		});
	}

	handleClosing = () => {
		this.setState({
			singularPortfolio: false,
			iconSize: 8
		});
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

componentWillUnmount() {
	window.removeEventListener('scroll', this.handleScroll);
}



handleScroll=()=>{
	//		console.log(window.scrollY);
	var st = window.pageYOffset || document.documentElement.scrollTop;
	if (st > this.lastScrollTop){
		//			console.log('down');
		this.transitionToMorning(true);	
		this.transitionToDay(true);
	} else {
		//			console.log('up');
		this.transitionToMorning(false);	
		this.transitionToDay(false);
	}
	this.lastScrollTop = st <= 0 ? 0 : st;
}

transitionToMorning = (yes) => {
	var newOpacity = 1 - (window.scrollY / 1000);
	if (newOpacity >= 0 || newOpacity <= 1){		
		this.setState({
			opacity: newOpacity
		});
	}
	var newTextColor = window.scrollY / 3;
	//		console.log(window.scrollY / 3);
	if (newTextColor % 10 == 0){		
		//			this.setState({
		//				textColor: {r: newTextColor, g:newTextColor, b:newTextColor}
		//			});
	}
}

transitionToDay = (yes) => {
	var newOpacity = 1 - (window.scrollY / 1000);
	if (newOpacity >= 0 || newOpacity <= 1){
		this.setState({
			opacityDay: newOpacity
		});
	}
}

render() {
	return (
		<div className="hide-scroll">
			{ window.innerWidth <= 700 ? 
			<div className="viewport">								
				<div>
					<div id="backgroundSky" className="window" style={{opacity: this.state.opacity}}>
						<div className='stars'>
						</div>
					</div>
					<div className="morningSky" style={{opacity: this.state.opacityDay}}>
					</div>
					<div className="daySky" >
					</div>
					<div className="content" style={{color:'rgb(' + this.state.textColor.r + ',' + this.state.textColor.g + ',' + this.state.textColor.b +')'}}>
						<AppRouter
							handleOpening = {this.handleOpening}
							handleClosing = {this.handleClosing}
							iconSize = {this.state.iconSize}
							singularPortfolio = {this.state.singularPortfolio}
							/>
					</div>
				</div>
			</div>
					:
			<div className="viewport" style={{height:  this.state.scrollDistance}}> 
				
				<div>
					<div id="backgroundSky" className="window" style={{opacity: this.state.opacity}}>
						<div className='stars'>
						</div>
					</div>
					<div className="morningSky" style={{opacity: this.state.opacityDay}}>
					</div>
					<div className="daySky" >
					</div>
					<div className="content" style={{color:'rgb(' + this.state.textColor.r + ',' + this.state.textColor.g + ',' + this.state.textColor.b +')'}}>
						<AppRouter
							handleOpening = {this.handleOpening}
							handleClosing = {this.handleClosing}
							iconSize = {this.state.iconSize}
							singularPortfolio = {this.state.singularPortfolio}
							/>
					</div>
				</div>
			</div>
			}
		</div>
	)
}
}

HomePage.propTypes = {

};
export default HomePage;
