import React from "react";

export default function LanguageWrapper() {
  return (
    <>
      <div className="language-wrapper">
        <div href="" className="language-title flex items-center">
          <img
            src="https://porto-demo7.myshopify.com/cdn/shop/t/29/assets/en.png?v=156887739256750668521639889145"
            className="current-flag"
            alt="language-flag"
          />
          <span className="current-language">English</span>
          <i className="fa-solid fa-angle-down"></i>
        </div>
        <div className="language-dropdown">
          <ul className="all-language-holder">
            <li className="flex items-center">
              <img
                src="https://porto-demo7.myshopify.com/cdn/shop/t/29/assets/en.png?v=156887739256750668521639889145"
                alt="language-flag"
              />
              <span className="current-language">English</span>
            </li>
            <li className="flex items-center">
              <img
                src="https://porto-demo7.myshopify.com/cdn/shop/t/29/assets/fr.png?v=103902703118731355171639889156"
                alt="language-flag"
              />
              <span className="current-language">Français</span>
            </li>
            <li className="flex items-center">
              <img
                src="https://porto-demo7.myshopify.com/cdn/shop/t/29/assets/de.png?v=328668538024613771639889145"
                alt="language-flag"
              />
              <span className="current-language">Deutchs</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
