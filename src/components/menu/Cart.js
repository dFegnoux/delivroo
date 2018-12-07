import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import QuantityModifier from "./QuantityModifier";
import {
  calculateCartTotalPrice,
  formatToPriceString
} from "../../helpers/cartHelpers";
import "./cart.scss";

class Cart extends Component {
  static propTypes = {
    menus: PropTypes.object.isRequired,
    updateCart: PropTypes.func.isRequired,
    switchToPayment: PropTypes.func.isRequired,
    disableButtons: PropTypes.bool
  };

  static defaultProp = {
    disableButtons: true
  };

  render() {
    const { menus, updateCart, switchToPayment, disableButtons } = this.props;
    const selectedMenus = Object.entries(menus);
    const isBtnDisabled = !selectedMenus.length ? "disabled" : null;

    return (
      <div className="cartWrapper">
        <div className="cart roundedItem">
          {!disableButtons && (
            <button
              onClick={() => {
                switchToPayment();
              }}
              disabled={isBtnDisabled}
            >
              Valider mon panier
            </button>
          )}
          {selectedMenus.length ? (
            <Fragment>
              <ul>
                {selectedMenus.map(menu => (
                  <li key={menu[0]}>
                    <QuantityModifier
                      item={menu[1]}
                      updateCart={updateCart}
                      disabled={disableButtons}
                    />
                    <span className="itemName">{menu[1].name}</span>
                    <span className="total">
                      {formatToPriceString(menu[1].price * menu[1].quantity)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mainTotal">
                <span>Total : </span>
                <span>{calculateCartTotalPrice(menus)}</span>
              </div>
            </Fragment>
          ) : (
            <div>Votre panier est vide</div>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
