import React from "react";
import ReactDOM from "react-dom";
import NoMatch from "./NoMatch";

it("Should render properly", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NoMatch />, div);
  ReactDOM.unmountComponentAtNode(div);
});
