import React from "react";
import ShippinTax from "./ShippinTax";

export default function CartRightTable() {
  return (
    <>
      <table className="responsive-table">
        <tbody>
          <tr className="cart-subtotal">
            <th>
              <h4>Subtotal</h4>
            </th>
            <td>
              <span className="subtotal-amount">$299.00</span>
            </td>
          </tr>
          <ShippinTax />
          <tr className="order-total">
            <th>
              <h4>Total</h4>
            </th>
            <td>
              <strong>
                <span className="final-amount">$299.00</span>
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
