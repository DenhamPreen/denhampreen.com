import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComingSoon from './ComingSoon/ComingSoon';
import HomePage from './HomePage';
import ReactGA from 'react-ga';

class App extends Component {
	state = {
		showPage: false
	}

handleOpenPage = () => {
	this.setState({showPage: true});
}

render() {
	ReactGA.initialize('UA-127033937-1');
	return (
		<div className="App">
			<HomePage/>
		</div>
	);
}
}
export default App;