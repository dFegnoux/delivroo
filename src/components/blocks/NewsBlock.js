import React, { PureComponent } from "react";
import "./newsBlock.scss";

class NewsBlock extends PureComponent {
  render() {
    return (
      <div className="newsBlockWrapper centerContent">
        <div className="newsBlockContent resetTextAlign">
          <div className="texts">
            <div className="newsTitle">Le Pain Quotidien - Montorgueil</div>
            <div className="newsDescription">
              Profitez de chaque plaisir de la vie quotidienne. Le Pain
              Quotidien propose des ingrédients simples et sains, du bon pain,
              des fruits et des légumes frais et de saison issus de
              l'agriculture biologique.
            </div>
          </div>
          <div className="newsPictureWrapper">
            <img src="//www.placekitten.com/g/700/300" alt="Miaou" />
          </div>
        </div>
      </div>
    );
  }
}

export default NewsBlock;
