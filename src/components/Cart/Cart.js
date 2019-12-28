import React, { useContext } from "react";
import withAuthInitial from '../../../utils/withAuthInitial';
import Label from '../Label/Label';
import { ProductsContext } from "../../context";
import Link from 'next/link';

const Cart = () => {
  const { selectedProductCart } = useContext(ProductsContext);
  return (
    <div>
      <h4>Cart Details: {selectedProductCart.length} </h4>
      <table className="table table-bordered">
      <thead>
                  <tr>
                    <th className="product-thumbnail">Image</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-total">Total</th>
                    <th className="product-remove">Remove</th>
                  </tr>
        </thead>
        <tbody>
      { selectedProductCart && selectedProductCart.length > 0 ? selectedProductCart
                    .map(item => 
                    <tr key={item._id}>
                        <td className="product-thumbnail"> 
                            <img className="img-responsive" src= {`/static/images/product-${item.image}.jpg`}  alt="Image" style={{ width:'50px'}}/>
                        </td>
                        <td className="product-name">{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.units}</td>
                        <td>{item.price * item.units}</td>
                        <td><a href="#" className="btn btn-primary btn-sm">X</a></td>
                        </tr>
                   )  : (
        <p>No Items in the Cart.</p>
      )}
      </tbody>
      </table>
      <div className="row">
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6 mb-3 mb-md-0">
                <button className="btn btn-primary btn-sm btn-block">Update Cart</button>
              </div>
              <div className="col-md-6">
                <Link href="/page"><a href="#" className="btn btn-outline-primary btn-sm btn-block">Continue Shopping</a></Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Label className="text-black h4" htmlFor="form_coupon" label="Coupon" />
                <p>Enter your coupon code if you have one.</p>
              </div>
              <div className="col-md-8 mb-3 mb-md-0">
                <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code"/>
              </div>
              <div className="col-md-4">
                <button className="btn btn-primary btn-sm">Apply Coupon</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-5">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">Subtotal</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">{ selectedProductCart.reduce((a,c) => a + c.price * c.units,0 )} </strong>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black">Total</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">{ selectedProductCart.reduce((a,c) => a + c.price * c.units,0 )} </strong>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <Link href="/checkout"><a href="#" className="btn btn-primary btn-lg py-3 btn-block">Proceed To Checkout</a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
                    }

export default withAuthInitial(Cart);