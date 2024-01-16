import React from "react";

export default function ProductTr() {
  return (
    <>
      <tr>
        <td className="product-thumbnail">
          <div className="image-holder">
            <a href="">
              <img
                src="https://porto-demo7.myshopify.com/cdn/shop/products/JeansPants_100x100@2x.jpg?v=1600571505"
                alt=""
              />
            </a>
            <a href="" className="remove-product-btn">
              <i className="fa-solid fa-xmark"></i>
            </a>
          </div>
        </td>
        <td className="product-name">
          <a href="">Jeans Pants</a>
        </td>
        <td className="product-price">
          <span className="cart-price">$299.00</span>
        </td>
        <td className="product-quantity">
          <div className="input-box">
            <input type="text" value={1} min={1} />
            <div className="plus-minus">
              <div className="minus-btn">
                <i className="fa-solid fa-minus"></i>
              </div>
              <div className="plus-btn">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </td>
        <td className="product-subtotal">
          <span className="product-total-amount">$299.00</span>
        </td>
      </tr>
    </>
  );
}
