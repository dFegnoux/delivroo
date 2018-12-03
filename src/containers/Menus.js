import React, { Component } from "react";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
import MenuCategories from "../components/menu/MenuCategories";

class Menus extends Component {
  state = {
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
        menu: this.formatMenus(response.data.menu)
      }));
    });
  }

  render() {
    const { menu } = this.state;
    return (
      <div className="menusContainer">
        {!menu.length ? <PacmanLoader /> : <MenuCategories categories={menu} />}
      </div>
    );
  }
}

export default Menus;
