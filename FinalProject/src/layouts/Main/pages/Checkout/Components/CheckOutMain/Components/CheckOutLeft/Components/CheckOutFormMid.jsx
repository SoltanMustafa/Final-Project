import React, { useState } from "react";

export default function CheckOutFormMid() {
  const [additionSection, setAdditionSection] = useState(false);

  const handleAdditionSection = () => {
    setAdditionSection((preVisible) => !preVisible);
  };

  return (
    <>
      <div className="checkout-form-mid">
        <div className="delivery-div">
          <span>Delivery</span>
        </div>
        <div className="mid-all-forms">
          <div className="select-div">
            <label htmlFor="">
              <span>Country/Region</span>
            </label>
            <select name="" id="">
              <option value="">Azerbaijan</option>
              <option value="">United States</option>
            </select>
            <div className="angel-down-div">
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div className="name-surname-div">
            <div className="name-div">
              <input
                type="text"
                name=""
                id=""
                placeholder="First name (optional)"
              />
            </div>
            <div className="surname-div">
              <input type="text" placeholder="Last name" />
            </div>
          </div>
          <div className="address-input-holder">
            <input type="text" name="" id="" placeholder="Address" />
          </div>
          <div className="add-apartment-btn">
            <div
              className={`add-inside-apartment ${
                additionSection ? "add-apartment-btn-none" : ""
              }`}
            >
              <button
                type="button"
                className="apartment-btn-itself"
                onClick={handleAdditionSection}
              >
                <i className="fa-solid fa-plus"></i>
                <span>Add apartment, suite, etc.</span>
              </button>
            </div>
          </div>
          <div
            className={`apartment-input-holder ${
              additionSection ? "apartment-input-show" : ""
            }`}
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Apartment, suite, etc. (optional)"
            />
            <div className="close-additional-section">
              <button
                type="button"
                className="close-add-btn"
                onClick={handleAdditionSection}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
            </div>
          </div>
          <div className="postal-city-div">
            <div className="postal-div">
              <input type="text" name="" id="" placeholder="Postal code" />
            </div>
            <div className="city-div">
              <input type="text" placeholder="City" />
            </div>
          </div>
          <div className="information-save-holder">
            <input type="checkbox" />
            <span>Save this information for next time</span>
          </div>
        </div>
        <div className="form-mid-bottom">
          <div className="shipping-method-div">
            <h3>Shipping method</h3>
          </div>
          <div className="international-shipping-div">
            <p>International Shipping</p>
            <span>$20.00</span>
          </div>
        </div>
      </div>
    </>
  );
}
