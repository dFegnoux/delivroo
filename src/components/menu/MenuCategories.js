import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import MenuCategory from "./MenuCategory";
import "./menuCategories.scss";

class MenuCategories extends PureComponent {
  static propTypes = {
    categories: PropTypes.array
  };

  static defaultProps = {
    categories: []
  };

  render() {
    const { categories } = this.props;
    console.log("CATEGORIES", categories);
    return (
      <div className="menuLayout">
        <div className="categoriesWrapper">
          {categories.map(category => (
            <MenuCategory key={category.title} category={category} />
          ))}
        </div>
        <div className="cart roundedItem">
          <button>Valider mon panier</button>
          <div>Votre panier est vide</div>
        </div>
      </div>
    );
  }
}

export default MenuCategories;
