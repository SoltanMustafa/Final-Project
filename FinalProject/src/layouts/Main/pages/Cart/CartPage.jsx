import React from "react";
import Header from "../../../../Components/Header/Header";
import Footer from "../../../../Components/Footer/Footer";
import WithoutProducts from "./Components/WithoutProducts/WithoutProducts";
import WithProducts from "./Components/WithProducts/WithProducts";
import CartSectionTop from "./Components/CartSectionTop";

export default function CartPage() {
  return (
    <>
      <Header />
      <div className="main-cart-container">
        <div className="main-cart-wrapper">
          <CartSectionTop />
          <WithoutProducts />
          <WithProducts />
        </div>
      </div>
      <Footer />
    </>
  );
}
