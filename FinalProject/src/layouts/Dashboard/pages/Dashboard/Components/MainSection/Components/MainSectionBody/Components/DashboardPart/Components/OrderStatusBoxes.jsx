import React from "react";

export default function OrderStatusBoxes() {
  return (
    <>
      <div className="order-status-boxes">
        <div className="status-box">
          <div className="box-inner">
            <div className="svg-div bg-orange-200">
              <i className="fa-solid fa-cart-arrow-down text-orange-600"></i>
            </div>
            <div className="data-div">
              <h6>Total Order</h6>
              <p>669</p>
            </div>
          </div>
        </div>
        <div className="status-box">
          <div className="box-inner">
            <div className="svg-div bg-lime-200">
              <i className="fa-solid fa-arrows-rotate text-lime-700"></i>
            </div>
            <div className="data-div">
              <h6>
                Orders Pending{" "}
                <span className="text-red-600 font-bold">(140911.23)</span>
              </h6>
              <p>299</p>
            </div>
          </div>
        </div>
        <div className="status-box">
          <div className="box-inner">
            <div className="svg-div bg-blue-200">
              <i className="fa-solid fa-truck-arrow-right text-blue-600"></i>
            </div>
            <div className="data-div">
              <h6>Orders Processing</h6>
              <p>75</p>
            </div>
          </div>
        </div>
        <div className="status-box">
          <div className="box-inner">
            <div className="svg-div bg-emerald-200">
              <i className="fa-solid fa-check text-emerald-600"></i>
            </div>
            <div className="data-div">
              <h6>Orders Delivered</h6>
              <p>339</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
