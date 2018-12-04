import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class QuantityModifier extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
    updateCart: PropTypes.func.isRequired
  };

  render() {
    const {
      item,
      item: { quantity },
      updateCart
    } = this.props;

    return (
      <div>
        <button
          onClick={() => {
            updateCart(item, "remove");
          }}
        >
          -
        </button>
        {quantity}
        <button
          onClick={() => {
            updateCart(item, "add");
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default QuantityModifier;
