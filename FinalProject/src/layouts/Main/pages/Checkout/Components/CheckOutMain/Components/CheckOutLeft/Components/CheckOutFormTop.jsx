import React from "react";

export default function CheckOutFormTop() {
  return (
    <>
      <div className="checkout-form-top">
        <div className="contact-div">
          <span className="contact-span">Contact</span>
          <span className="question-span">
            <span>Have an account?</span>
            <a href="">Log in</a>
          </span>
        </div>
        <div className="email-div">
          <div className="email-input-holder">
            <input type="email" name="" id="" placeholder="Email" />
          </div>
          <div className="check-email-holder">
            <input type="checkbox" />
            <span>Email me with news and offers</span>
          </div>
        </div>
      </div>
    </>
  );
}
