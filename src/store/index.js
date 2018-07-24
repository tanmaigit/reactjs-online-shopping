import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import productReducer from '../reducers/product';

const initialState = {
	products: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	productReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);
export default store;
