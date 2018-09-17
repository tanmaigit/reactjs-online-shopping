import React, { Component } from 'react';
import store from './store';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { Provider } from 'react-redux';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="wrapper">
					<Header />
					<Body />
				</div>
			</Provider>
		);
	}
}

export default App;
