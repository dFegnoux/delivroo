import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./newsBlock.scss";

class NewsBlock extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    picture: PropTypes.string
  };

  static defaultProps = {
    name: "That restaurant",
    description: "I sure you which one, as it is well described here",
    picture: "//www.placekitten.com/g/700/300"
  };

  render() {
    const { name, description, picture } = this.props;

    return (
      <div className="newsBlockWrapper centerContent">
        <div className="newsBlockContent resetTextAlign">
          <div className="texts">
            <div className="newsTitle">{name}</div>
            <div className="newsDescription">{description}</div>
          </div>
          <div className="newsPictureWrapper">
            <img src={picture} alt={name} />
          </div>
        </div>
      </div>
    );
  }
}

export default NewsBlock;
