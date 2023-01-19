import React, { Component } from "react";

export default class ProductCart extends Component {
  render() {
    const { productItem, addToCart } = this.props;
    return (
      <div className="card text-dark bg-light">
        <img className="card-img-top" src={productItem.hinhAnh} alt={productItem.hinhAnh} height={300} width={300}/>
        <div className="card-body">
          <h4 className="card-title text-start">{productItem.tenSP}</h4>
          <button className="btn btn-success" style={{marginRight:'60px'}}>Xem Chi Tiết</button>
          <button className="btn btn-danger" onClick={() => addToCart(productItem)} >Thêm Giỏ Hàng</button>
        </div>
      </div>
    );
  }
}
