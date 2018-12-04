import React, { Component, Fragment } from "react";
import axios from "axios";
import NewsBlock from "../components/blocks/NewsBlock";
import PacmanLoader from "react-spinners/PacmanLoader";
import MenuCategories from "../components/menu/MenuCategories";

class Menus extends Component {
  state = {
    restaurant: {},
    menu: [],
    cart: {}
  };

  /**
   * Format menus from delivroo into an array of categories
   * @param {Object} categories : Categories of the menus
   * @returns a collection of categories
   */
  formatMenus = categories =>
    Object.entries(categories).filter(category => category[1].length);

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
            price: menu.price,
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

  componentDidMount() {
    // Get Menus
    axios.get("https://deliveroo-api.now.sh/menu").then(response => {
      if (response.data instanceof Object) {
        this.setState(() => ({
          menu: this.formatMenus(response.data.menu) || [],
          restaurant: response.data.restaurant || {}
        }));
      }
    });
  }

  render() {
    const { menu, restaurant, cart } = this.state;
    return (
      <Fragment>
        {Object.keys(restaurant).length && (
          <NewsBlock
            name={restaurant.name}
            description={restaurant.description}
            picture={restaurant.picture}
          />
        )}
        <div className="menusContainer">
          {!menu.length ? (
            <PacmanLoader />
          ) : (
            <MenuCategories
              categories={menu}
              updateCart={this.updateCart}
              cart={cart}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

export default Menus;
