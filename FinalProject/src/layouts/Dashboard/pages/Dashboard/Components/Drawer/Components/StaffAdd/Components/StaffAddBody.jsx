import React from "react";

export default function StaffAddBody({ formik }) {
  return (
    <>
      <div className="product-add-body">
        <form
          action="post"
          className="product-add-form"
          onSubmit={formik.handleSubmit}
        >
          <div className="form-inputs">
            <div className="product-title-name">
              <label htmlFor="name">Name</label>
              <div className="input-div">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Staff name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
            </div>
            <div className="product-title-name">
              <label htmlFor="surname">Surname</label>
              <div className="input-div">
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Staff surname"
                  onChange={formik.handleChange}
                  value={formik.values.surname}
                />
              </div>
            </div>
            <div className="product-title-name">
              <label htmlFor="email">Email</label>
              <div className="input-div">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
            </div>
            <div className="product-title-name">
              <label htmlFor="password">Password</label>
              <div className="input-div">
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
