import React, { Component } from 'react'
import ProductCart from './ProductCart';

export default class ProductList extends Component {
  render() {
    const {arrProduct, addToCart} = this.props;
    return (
      <div className='container'>
        <div className='row'>
            {arrProduct.map((productItem, index) => {
                return (
                    <div className='col-4' key={index}>
                        <ProductCart productItem={productItem} addToCart={addToCart}/>
                    </div>
                )
            })}
        </div>
      </div>
    )
  }
}
