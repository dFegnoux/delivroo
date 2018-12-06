import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import MenuCategory from "./MenuCategory";
import PaymentForm from "../forms/PaymentForm";
import Cart from "./Cart";
import "./menu.scss";

class MenuCategories extends PureComponent {
  static propTypes = {
    categories: PropTypes.array,
    updateCart: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired,
    showPayment: PropTypes.bool,
    switchToPayment: PropTypes.func.isRequired
  };

  static defaultProps = {
    categories: [],
    showPayment: false
  };

  render() {
    const {
      categories,
      updateCart,
      cart,
      showPayment,
      switchToPayment
    } = this.props;

    return (
      <div className="menuLayout">
        <div className="menuContentWrapper">
          {!showPayment ? (
            categories.map(category => (
              <MenuCategory
                key={category[0]}
                title={category[0]}
                menus={category[1]}
                updateCart={updateCart}
              />
            ))
          ) : (
            <PaymentForm />
          )}
        </div>
        <Cart
          menus={cart}
          updateCart={updateCart}
          switchToPayment={switchToPayment}
          hasToDisplayButton={showPayment}
        />
      </div>
    );
  }
}

export default MenuCategories;
