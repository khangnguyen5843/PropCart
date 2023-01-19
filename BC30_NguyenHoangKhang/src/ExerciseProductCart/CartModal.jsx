import React, { Component } from "react";

export default class CartModal extends Component {
  render() {
    const { cart, deleteFromCart, changeItemInCart } = this.props;

    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div
              className="modal-content"
              style={{ width: "800px", maxWidth: "800px" }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <td>Mã sản phẩm</td>
                      <td>Hình ảnh</td>
                      <td>Tên sản phẩm</td>
                      <td>Số lượng</td>
                      <td>Đơn giá</td>
                      <td>Thành tiền</td>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((prodInCart, index) => {
                      return (<tr key={index}>
                        <td>{prodInCart.maSP}</td>
                        <td><img src={prodInCart.hinhAnh} alt={prodInCart.hinhAnh} width={50} height={50}/></td>
                        <td>{prodInCart.tenSP}</td>
                        <td>
                          <button className="btn btn-primary mx-1" onClick={() => changeItemInCart(prodInCart.maSP, false)}>-</button>
                          {prodInCart.soLuong}
                          <button className="btn btn-primary mx-1" onClick={() => changeItemInCart(prodInCart.maSP, true)}>+</button>
                        </td>
                        <td>{prodInCart.giaBan.toLocaleString()}</td>
                        <td>{(prodInCart.soLuong * prodInCart.giaBan).toLocaleString()}</td>
                        <td><button className="btn btn-danger" onClick={() => deleteFromCart(prodInCart.maSP)}>Xóa</button></td>
                      </tr>)
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={5}></td>
                      <td>Tổng tiền</td>
                      <td>
                        {this.props.cart.reduce((total, prodInCart, index) => {
                          return(
                            total += prodInCart.soLuong * prodInCart.giaBan
                          )
                        },0).toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
