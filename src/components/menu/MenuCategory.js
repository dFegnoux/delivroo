import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import MenuCard from "./MenuCard";
import "./menuCategory.scss";

class MenuCategory extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    menus: PropTypes.array,
    updateCart: PropTypes.func.isRequired
  };

  static defaultProps = {
    title: "Default category title",
    menus: []
  };

  render() {
    const { title, menus, updateCart } = this.props;

    return (
      <div className="menuCategory">
        <div className="title">{title}</div>
        {menus.length && (
          <div className="itemsList">
            {menus.map(item => (
              <MenuCard updateCart={updateCart} key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default MenuCategory;
