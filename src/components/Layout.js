import React from "react";
import "./layout.scss";
import DelivrooLogo from "./images/DelivrooLogo";

const Layout = ({ children }) => (
  <div className="layout">
    <div className="resetTextAlign">
      <div className="header">
        <DelivrooLogo />
      </div>
      <div className="layoutContent">{children}</div>
    </div>
  </div>
);

export default Layout;
