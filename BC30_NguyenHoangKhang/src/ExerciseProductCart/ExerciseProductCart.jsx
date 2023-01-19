import React, { Component } from 'react'
import CartModal from './CartModal'
import ProductList from './ProductList'

const data = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
]

export default class ExerciseProductCart extends Component {

  constructor(props){
    super(props);
    this.state = {
      cart: []
    }
  }

  // Add collectedProduct to the cart
  addToCart = (collectedProduct) => {

    let itemInCart = {
      maSP: collectedProduct.maSP, 
      tenSP: collectedProduct.tenSP, 
      giaBan: collectedProduct.giaBan, 
      hinhAnh: collectedProduct.hinhAnh, 
      soLuong: 1 
    }

    // Check if the item(s) existed in the cart or not
    let cartUpdate = [...this.state.cart];
    let index = cartUpdate.findIndex(prod => prod.maSP === itemInCart.maSP);
    // if yes
    if(index !== -1){
      cartUpdate[index].soLuong += 1;
    } else{ // if no
      cartUpdate.push(itemInCart);
    }

    // Change result
    this.setState({
      cart:cartUpdate
    });
  }

  // Delete collectedProduct from the cart
  deleteFromCart = (maSP) => {
    // Find index to get maSP
    let cartUpdate = [...this.state.cart];
    let index = cartUpdate.findIndex(prod => prod.maSP === maSP);
    // if maSP existed in the cart => remove it from the cart
    if(index !== -1){
      cartUpdate.splice(index,1);
    }

    // Change result and render updated result
    this.setState({
      cart:cartUpdate
    })
  }

  // Increase or Decrease numbers of items
  changeItemInCart = (maSP, changeAmount) => {
    let cartUpdate = [...this.state.cart];
    let index = cartUpdate.findIndex(prod => prod.maSP === maSP);
    // if changeAmount === true => Increase
    if(changeAmount){
      cartUpdate[index].soLuong += 1;
    } // if changeAmount === false => Decrease
    else if(cartUpdate[index].soLuong > 1){
      cartUpdate[index].soLuong -= 1;
    }

    this.setState({
      cart: cartUpdate
    })
  }

  render() {

    // Build algorithm for the span "Giỏ hàng" through ProductList component
    let totalItem = this.state.cart.reduce((total, prodInCart, index) => {
      return total += prodInCart.soLuong;
    },0);

    return (
      <div className='container'>
        <h1>Exercise Products Cart</h1>
        <CartModal cart={this.state.cart} deleteFromCart={this.deleteFromCart} changeItemInCart={this.changeItemInCart}/>
        <div className='text-end'>
            <span className='text-danger' style={{fontSize:'20px', fontWeight:'bold', cursor:'pointer'}} data-bs-toggle="modal" data-bs-target="#modelId">Giỏ Hàng ({totalItem})</span>
        </div>
        <ProductList arrProduct={data} addToCart={this.addToCart}/>
      </div>
    )
  }
}
