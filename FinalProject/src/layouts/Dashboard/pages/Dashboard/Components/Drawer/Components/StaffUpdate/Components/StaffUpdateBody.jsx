import React from "react";

export default function StaffUpdateBody() {
  return (
    <>
      <div className="product-add-body">
        <form action="" className="product-add-form">
          <div className="form-inputs">
            <div className="product-title-name">
              <label htmlFor="">Name</label>
              <div className="input-div">
                <input type="text" placeholder="Staff name" />
              </div>
            </div>
            <div className="product-title-name">
              <label htmlFor="">Surname</label>
              <div className="input-div">
                <input type="text" placeholder="Staff surname" />
              </div>
            </div>
            <div className="product-title-name">
              <label htmlFor="">Email</label>
              <div className="input-div">
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="product-title-name">
              <label htmlFor="">Password</label>
              <div className="input-div">
                <input type="text" placeholder="Password" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
