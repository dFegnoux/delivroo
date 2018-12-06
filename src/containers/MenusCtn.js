import React, { Component, Fragment } from "react";
import axios from "axios";
import RestaurantBlock from "../components/blocks/RestaurantBlock";
import PacmanLoader from "react-spinners/PacmanLoader";
import Menu from "../components/menu/Menu";
import { formatMenus } from "../helpers/menuHelpers";

class Menus extends Component {
  state = {
    restaurant: {},
    menu: [],
    cart: {},
    showPayment: false
  };

  /**
   * Add, remove menus from cart
   * @param {Object} menu : A menu object from delivroo API
   * @param {String} action : 'add' or 'remove'
   */
  updateCart = (menu, action) => {
    // Get previous item if it already exists
    const previousItem = this.state.cart.hasOwnProperty(menu.id)
      ? this.state.cart[menu.id]
      : null;

    let newQuantity = previousItem ? previousItem.quantity : 0;
    if (action === "remove") {
      newQuantity--;
    } else {
      newQuantity++;
    }

    if (newQuantity) {
      this.setState(() => ({
        cart: {
          ...this.state.cart,
          [menu.id]: {
            ...menu,
            name: menu.title,
            quantity: newQuantity
          }
        }
      }));
    } else {
      const newCart = {
        ...this.state.cart
      };

      delete newCart[menu.id];

      this.setState(() => ({
        cart: newCart
      }));
    }
  };

  switchToPayment = (action = true) => {
    this.setState(() => ({ showPayment: action }));
  };

  componentDidMount() {
    // Get Menus
    axios.get("https://deliveroo-api.now.sh/menu").then(response => {
      if (response.data instanceof Object) {
        this.setState(() => ({
          menu: formatMenus(response.data.menu) || [],
          restaurant: response.data.restaurant || {}
        }));
      }
    });
  }

  render() {
    const { menu, restaurant, cart, showPayment } = this.state;

    return (
      <Fragment>
        {Object.keys(restaurant).length && (
          <RestaurantBlock
            name={restaurant.name}
            description={restaurant.description}
            picture={restaurant.picture}
          />
        )}
        <div className="menusContainer">
          {!menu.length ? (
            <PacmanLoader />
          ) : (
            <Menu
              categories={menu}
              updateCart={this.updateCart}
              cart={cart}
              showPayment={showPayment}
              switchToPayment={this.switchToPayment}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

export default Menus;
