import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class QuantityModifier extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
    updateCart: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    disabled: false
  };

  render() {
    const {
      item,
      item: { quantity },
      updateCart,
      disabled
    } = this.props;

    return (
      <div className="quantityModifier">
        {!disabled && (
          <button
            onClick={() => {
              updateCart(item, "remove");
            }}
          >
            -
          </button>
        )}
        <span className="quantity">{quantity}</span>
        {!disabled && (
          <button
            onClick={() => {
              updateCart(item, "add");
            }}
          >
            +
          </button>
        )}
      </div>
    );
  }
}

export default QuantityModifier;
