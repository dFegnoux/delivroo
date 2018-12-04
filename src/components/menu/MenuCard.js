import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./menuCard.scss";

class MenuCard extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      picture: PropTypes.string,
      price: PropTypes.string,
      popular: PropTypes.bool
    }),
    updateCart: PropTypes.func.isRequired
  };

  static defaultProps = {
    item: {
      id: "Default id",
      title: "Default Menu item",
      description: "Default menu item description",
      picture: "//www.placekitten.com/300/300",
      price: "0.00",
      popular: false
    }
  };

  render() {
    const {
      item,
      item: { title, description, picture, price, popular },
      updateCart
    } = this.props;

    return (
      <div
        className="menuCard"
        onClick={() => {
          updateCart(item, "add");
        }}
      >
        <div className="content roundedItem">
          <div className="texts">
            <div className="cardTitle">{title}</div>
            <div className="description">{description.substr(0, 50)}</div>
            <div className="bottom">
              <span className="price">{price} €</span>
              {popular && <span className="popular">Populaire</span>}
            </div>
          </div>
          {picture && (
            <div className="pictureWrapper">
              <img src={picture} alt={title} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MenuCard;
