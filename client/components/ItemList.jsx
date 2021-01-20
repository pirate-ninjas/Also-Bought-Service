import React from 'react';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    function getStars(rating) {
      const percent = Math.floor((rating / 5) * 100);
      return percent;
    }
    let { items } = this.props;
    let { vis } = this.props;
    let { show } = this.props;
    let { hide } = this.props;
    items = items.map((item, idx) => (
      <div className="productcard" key={idx} onMouseEnter={show} onMouseLeave={hide}>
        <div className="productimg"><img alt={item.name} src={`${item.img_url}/sig=${idx}`} /></div>
        <div className="brandname">{item.brand}</div>
        <div className="productname">{item.name}</div>
        <div className="rating">
          <span
            className="stars"
            style={{
              background: `linear-gradient(90deg, gold, gold ${getStars(item.rating)}%, transparent, transparent ${getStars(item.rating)}%)`,
              WebkitTextStroke: '1px goldenrod',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ★★★★★
          </span>
          <span className="reviewers">
            (
            {item.reviews}
            )
          </span>
        </div>
        <div className="price">
          $
          {item.price}
          .98
        </div>
        <div className={vis}>
          <span className="description">
            {item.description}
          </span>
          <span className="color">
            Colors:
            {item.colors.map((color, idx2) => (
              <span
                className="colorBlock"
                style={{ color }}
                key={idx2}
              >
                ■
              </span>
            ))}
          </span>
          <span className="features">
            Features:
            <ul>
              <li>{item.features[0]}</li>
              <li>{item.features[1]}</li>
            </ul>
          </span>
        </div>
      </div>
    ));
    return (
      <div id="alsoliked">
        <span id="peopleliked">People also liked</span>
        <div className="alsoLiked">{items}</div>
      </div>
    );
  }
}

export default ItemList;
