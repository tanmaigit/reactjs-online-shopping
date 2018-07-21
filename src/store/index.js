import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from '../reducers/product';

const initialState = {
  products: []
};

const store = createStore(productReducer, initialState, applyMiddleware(thunk));
export default store;
