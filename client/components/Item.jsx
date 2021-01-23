/* eslint-disable react/prop-types */
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
    const { item, idx, mod } = this.props;
    const { view } = this.state;
    let searchItem = item.name.split(' ');
    searchItem.shift();
    searchItem = searchItem.join('+');
    return (
      <div className="productcard" key={idx} onMouseEnter={this.show} onMouseLeave={this.hide} title="itemtest">
        <div className="productimg"><a href={`https://www.rei.com/search?q=${searchItem}`}><img alt={item.name} src={`${item.img_url}/sig=${item.itemNum}`} /></a></div>
        <a href={`https://www.rei.com/search?q=${searchItem}`}>
          <div className="brandname">{item.brand}</div>
          <div className="productname">{item.name}</div>
        </a>
        <div className="rating">
          <span
            className="stars"
            style={{
              background: `linear-gradient(90deg, #ffd280, #ffd280 ${getStars(item.rating)}%, #d19646, #d19646 ${getStars(item.rating)}%, transparent, transparent ${getStars(item.rating) + 2}%)`,
              WebkitTextStroke: '1px #d19646',
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
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
