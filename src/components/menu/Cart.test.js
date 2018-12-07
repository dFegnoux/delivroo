import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Cart from "./Cart";

Enzyme.configure({ adapter: new Adapter() });

const mockedMenus = {
  menu1: {
    id: "menu1",
    title: "title menu1",
    description: "desc menu1",
    price: "15.00",
    picture: "//www.placekitten.com/100/100",
    quantity: 1
  },
  menu2: {
    id: "menu2",
    title: "title menu2",
    description: "desc menu2",
    price: "5.00",
    picture: "//www.placekitten.com/100/100",
    quantity: 3
  }
};

const props = {
  menus: mockedMenus,
  updateCart: () => {
    console.log("Updated!");
  },
  switchToPayment: () => {
    console.log("Switched");
  },
  disableButtons: false
};
const container = shallow(<Cart {...props} />);

it("should render whithtout error", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Cart {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should have as many list item as menus", () => {
  expect(container.find("li").length).toBe(2);
});

describe("Validate button", () => {
  afterEach(() => {
    container.setProps(props);
  });

  it("should be displayed if props say so", () => {
    expect(container.find("button").length).toBe(1);
    container.setProps({ disableButtons: true });
    expect(container.find("button").length).toBe(0);
  });

  it("should display as disabled with an empty cart", () => {
    container.setProps({ menus: {} });
    expect(container.find("button").props().disabled).toBeTruthy();
  });

  it("should call switch function on click", () => {
    const mockSwitchToPayment = jest.fn();
    container.setProps({ switchToPayment: mockSwitchToPayment });
    container.find("button").simulate("click");
    expect(mockSwitchToPayment.mock.calls.length).toBe(1);
  });
});
