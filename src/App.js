import React, { Component } from 'react';
import store from './store';
import Header from './components/Header/Header';
import ProductList from './components/ProductList';
import { Provider } from 'react-redux';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="wrapper">
					<Header />
					<div>
						<ProductList />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
