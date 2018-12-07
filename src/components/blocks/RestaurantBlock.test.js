import React from "react";
import ReactDOM from "react-dom";
import RestaurantBlock from "./RestaurantBlock";

const props = {
  name: "My awesome restaurant",
  description: "It's so awesome it can bring your loved one back",
  picture: "//www.placekitten.com/400/400"
};

it("should render whithtout error", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RestaurantBlock {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should render whithtout error without props", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RestaurantBlock />, div);
  ReactDOM.unmountComponentAtNode(div);
});
