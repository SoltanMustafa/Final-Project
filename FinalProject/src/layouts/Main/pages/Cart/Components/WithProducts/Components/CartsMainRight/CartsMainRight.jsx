import React from "react";
import CartRightTable from "./Components/CartRightTable";
import { useNavigate } from "react-router-dom";

export default function CartsMainRight() {
  const navigate = useNavigate();

  const handleToCheckout = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };
  return (
    <>
      <div className="col-lg-4 carts-main-right">
        <div className="cart-right-inside">
          <h4 className="cart-subtitle">Cart Totals</h4>
          <div className="cart-body">
            <CartRightTable />
            <div className="proceed-to-checkout">
              <button
                type="submit"
                className="btn-dark"
                onClick={handleToCheckout}
              >
                <span>Proceed to checkout</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
