import React from "react";
import StaffAddHeader from "./Components/StaffAddHeader";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { AdminRegister } from "../../../../../../../../services/Admin";
import { CloseStaffAdd } from "../../../../../../../../RTK/features/counter/StaffAdd";

export default function StaffAdd() {
  const staffAddActive = useSelector((state) => state.staffAdd.staffAddActive);
  const staffAddDispatch = useDispatch();
  function handleCloseStaff() {
    staffAddDispatch(CloseStaffAdd());
  }

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
      name: "",
      surname: "",
    },
    onSubmit: (values) => {
      AdminRegister(values)
        .then(({ data }) => {
          console.log({ data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <>
      <div
        className={`staff-add-container ${staffAddActive ? "module-show" : ""}`}
      >
        <div className="container-content">
          <StaffAddHeader />
          <div className="product-add-body">
            <form className="product-add-form" onSubmit={formik.handleSubmit}>
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
              <div className="form-buttons">
                <div className="button-div">
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={handleCloseStaff}
                  >
                    Cancel
                  </button>
                </div>
                <div className="button-div">
                  <button type="submit" className="add-btn">
                    Add Staff
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
