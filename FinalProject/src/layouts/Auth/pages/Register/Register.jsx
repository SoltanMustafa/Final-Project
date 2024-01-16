import React, { useEffect } from "react";
import Header from "../../../../Components/Header/Header";
import Footer from "../../../../Components/Footer/Footer";
import RegisterTop from "./Components/RegisterTop";
import RegisterForm from "./Components/RegisterForm";

export default function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="main-register-container">
        <div className="main-wrapper">
          <div className="main-itself">
            <RegisterTop />
            <RegisterForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
