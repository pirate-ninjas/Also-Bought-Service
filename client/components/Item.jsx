import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'onHoverHidden',
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({ view: 'onHoverDisplay' });
  }

  hide() {
    this.setState({ view: 'onHoverHidden' });
  }

  render() {
    function getStars(rating) {
      return Math.floor((rating / 5) * 100);
    }
    let { item, idx, mod } = this.props;
    let { view } = this.state;
    return (
      <div className="productcard" key={idx} onMouseEnter={this.show} onMouseLeave={this.hide}>
        <div className="productimg"><img alt={item.name} src={`${item.img_url}/sig=${idx + mod}`} /></div>
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
        <div className={view}>
          <span className="description">
            {item.description}
            .
          </span>
          <span className="color">
            <b>Colors:</b>
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
            <b>Features:</b>
            <ul>
              <li>{item.features[0]}</li>
              <li>{item.features[1]}</li>
            </ul>
          </span>
          <div className="buttons">
            <span>
              <button className="cart" type="button">
                Add to cart -- $
                {item.price}
                .98
              </button>
            </span>
            <span className="wishreg">
              <button className="util" type="button">Wish list</button>
              <button className="util" type="button">Registry</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
