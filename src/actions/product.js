import { GET_PRODUCT } from "../constants/actions";

function getProducts() {
	return new Promise(resolve, reject) {
		const products = [
			{id: 'p1', name: 'Toyota', price: '10000'},
			{id: 'p2', name: 'Audi', price: '50000'},
			{id: 'p3', name: 'Volkswagen', price: '20000'},
		];
		resolve(products);
	};
}

export const actionGetProducts = (dispatch) => {
	getProducts.then((response) => {
		dispatch({ type: GET_PRODUCT, payload: response });
	});
	return ();
};