import React from "react";

export default function ShippinTax() {
  return (
    <>
      <tr className="mid-body">
        <th colSpan={2}>
          <h4>Estimate Shipping and Tax</h4>
          <div className="shipping-calculator">
            <p className="title-p">
              Enter your destination to get a shipping estimate.
            </p>
            <ul className="shipping-tax-ul">
              <li className="country-li">
                <label htmlFor="" className="country-label">
                  <span>Country</span>
                  <em>*</em>
                </label>
                <select name="adress[country]" id="" className="country-select">
                  <option value="">---</option>
                  <option value="">Azerbaijan</option>
                  <option value="">Turkey</option>
                  <option value="">United States</option>
                </select>
              </li>
              <li className="zip-li">
                <label htmlFor="">Zip/Postal Code</label>
                <input type="text" className="input-zip" />
              </li>
            </ul>
            <div className="button-set">
              <button className="quote-btn">Get a Quote</button>
            </div>
          </div>
        </th>
      </tr>
    </>
  );
}
