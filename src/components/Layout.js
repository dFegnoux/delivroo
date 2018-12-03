import React from "react";
import "./layout.scss";
import DelivrooLogo from "./images/DelivrooLogo";

import NewsBlock from "./blocks/NewsBlock";

const Layout = ({ children }) => (
  <div className="layout">
    <div className="resetTextAlign">
      <div className="header">
        <DelivrooLogo />
      </div>
      <NewsBlock />
      <div className="layoutContent">{children}</div>
    </div>
  </div>
);

export default Layout;
