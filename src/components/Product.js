import React from 'react';
class Product extends React.Component {
  render() {
    const { id, name, price } = this.props.data;
    return (
      <div className="product-item">
        <div>ID: {id}</div>
        <div>Name: {name}</div>
        <div>Price: {price}</div>
      </div>
    );
  }
}

export default Product;
