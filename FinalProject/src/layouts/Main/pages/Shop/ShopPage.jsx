import React from "react";
import Header from "../../../../Components/Header/Header";
import Footer from "../../../../Components/Footer/Footer";
import ShoppingTop from "./Components/ShoppingTop";
import ShoppingMainBody from "./Components/ShoppingMainBody/ShoppingMainBody";
import QuickMenu from "../../../../Components/QuickMenu/QuickMenu";

export default function ShopPage() {
  return (
    <>
      <Header />
      <div className="shoppage-main">
        <ShoppingTop />
        <ShoppingMainBody />
      </div>
      <QuickMenu />
      <Footer />
    </>
  );
}
