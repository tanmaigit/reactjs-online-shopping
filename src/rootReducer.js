import { combineReducers } from 'redux';
import productListReducer from './modules/productList/reducer';

export default combineReducers({
  productList: productListReducer
});