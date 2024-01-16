import React from "react";

export default function CartSectionTop() {
  return (
    <>
      <div className="section-top">
        <ul className="section-header-ul">
          <li className="current-li">
            <a href="">Shopping Cart</a>
          </li>
          <li className="hover-li">
            <i class="fa-solid fa-angle-right"></i>
            <a href="">Proceed to checkout</a>
          </li>
          <li className="disable">
            <i class="fa-solid fa-angle-right"></i>
            <a href="">Order Complete</a>
          </li>
        </ul>
      </div>
    </>
  );
}
