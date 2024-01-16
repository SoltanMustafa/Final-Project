import React from "react";

export default function ProductBottomTr() {
  return (
    <>
      <tr>
        <td colSpan={5} className="actions-td w-full">
          <div className="buttons-holder flex justify-between w-full">
            <a href="" className="continue-shopping">
              <span>Continue Shopping</span>
            </a>
            <button type="submit" className="update-btn">
              <span>Update Shopping Cart</span>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
