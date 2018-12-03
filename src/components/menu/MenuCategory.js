import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import MenuCard from "./MenuCard";
import "./menuCategory.scss";

class MenuCategory extends PureComponent {
  static propTypes = {
    category: PropTypes.shape({
      title: PropTypes.string.isRequired,
      menus: PropTypes.array
    })
  };

  static defaultProps = {
    category: {
      title: "Default category title",
      menus: []
    }
  };

  render() {
    const {
      category: { title, menus }
    } = this.props;
    console.log(this.props);
    return (
      <div className="menuCategory">
        <div className="title">{title}</div>
        {menus.length && (
          <div className="itemsList">
            {menus.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default MenuCategory;
