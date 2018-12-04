import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import MenuCategory from "./MenuCategory";
import Cart from "./Cart";
import "./menuCategories.scss";

class MenuCategories extends PureComponent {
  static propTypes = {
    categories: PropTypes.array,
    updateCart: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired
  };

  static defaultProps = {
    categories: []
  };

  render() {
    const { categories, updateCart, cart } = this.props;

    return (
      <div className="menuLayout">
        <div className="categoriesWrapper">
          {categories.map(category => (
            <MenuCategory
              key={category[0]}
              title={category[0]}
              menus={category[1]}
              updateCart={updateCart}
            />
          ))}
        </div>
        <Cart menus={cart} updateCart={updateCart} />
      </div>
    );
  }
}

export default MenuCategories;
