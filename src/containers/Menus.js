import React, { Component, Fragment } from "react";
import axios from "axios";
import NewsBlock from "../components/blocks/NewsBlock";
import PacmanLoader from "react-spinners/PacmanLoader";
import MenuCategories from "../components/menu/MenuCategories";
import isEmpty from "lodash/isEmpty";

class Menus extends Component {
  state = {
    restaurant: {},
    menu: []
  };

  /**
   * Format menus from delivroo into an array of categories
   * @param categories (Object) : Categories of the menus
   * @returns a collection of categories
   */
  formatMenus = categories => {
    const filteredCategories = [];

    for (let key in categories) {
      if (categories[key].length) {
        filteredCategories.push({
          title: key,
          menus: categories[key]
        });
      }
    }

    return filteredCategories;
  };

  componentDidMount() {
    // Get Menus
    axios.get("https://deliveroo-api.now.sh/menu").then(response => {
      this.setState(() => ({
        menu: this.formatMenus(response.data.menu),
        restaurant: response.data.restaurant
      }));
    });
  }

  render() {
    const { menu, restaurant } = this.state;
    return (
      <Fragment>
        {!isEmpty(restaurant) && (
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
            <MenuCategories categories={menu} />
          )}
        </div>
      </Fragment>
    );
  }
}

export default Menus;
