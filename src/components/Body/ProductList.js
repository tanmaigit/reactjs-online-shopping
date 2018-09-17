import { connect } from 'react-redux';
import React from 'react';
import Product from './Product';
import { actionGetProducts } from '../../actions/product';

class ProductList extends React.Component {
	componentDidMount() {
		this.props.getProducts('us');
	}

	render() {
		const { products } = this.props;
		const productListTemplate = products.map(productData => {
			return <Product data={productData} />;
		});
		return <div className="col"><div className="row">{productListTemplate}</div></div>;
	}
}

const mapStateToProps = state => ({
	products: state.products
});

const mapDispatchToProps = dispatch => ({
	getProducts: filter => dispatch(actionGetProducts(filter))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductList);
