import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import ProductList from './components/ProductList';
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
		<Provider store={store}>
		  <div className="App">
			<header className="App-header">
			  <img src={logo} className="App-logo" alt="logo" />
			  <h1 className="App-title">Welcome to React</h1>
			</header>
			<div className="main-container">
				<ProductList />
			</div>
		  </div>
		</Provider>
    );
  }
}

export default App;
