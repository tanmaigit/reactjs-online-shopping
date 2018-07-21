import { connect } from "react-redux";
import Product from '../components/Product';
import { actionGetProducts } from '../action/product';

class ProductList extends React.Component {
	
	componentDidMount() {
		this.props.getProducts();
	}
	
	render() {
		const { products } = this.props;
		const productListTemplate = products.map((productData)=>{
			return <Product data={productData}/>;
		});
		return (
			<div className="product-list">
				{productListTemplate}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	products: state.products
});

const mapDispatchToProps = (dispatch) => ({
	getProducts: () => dispatch(actionGetProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);