import { GET_PRODUCT } from '../constants/actions';

function getProducts(filter) {
	return new Promise((resolve, reject) => {
		const products = [
			{ id: 'p1', name: '[Toyota]' + filter, price: '10000' },
			{ id: 'p2', name: '[Audi]' + filter, price: '50000' },
			{ id: 'p3', name: '[Volkswagen]' + filter, price: '20000' }
		];
		resolve(products);
	});
}

export const actionGetProducts = filter => {
	return dispatch => {
		getProducts(filter).then(response => {
			dispatch({ type: GET_PRODUCT, payload: response });
		});
	};
};
