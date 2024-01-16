import React, { useEffect } from "react";
import Header from "../../../../Components/Header/Header";
import Footer from "../../../../Components/Footer/Footer";
import LoginTop from "./Components/LoginTop";
import LoginForm from "./Components/LoginForm";

export default function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="main-login-container">
        <div className="main-wrapper">
          <div className="main-itself">
            <LoginTop />
            <LoginForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
