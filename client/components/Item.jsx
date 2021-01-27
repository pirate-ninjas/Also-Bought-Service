/* eslint-disable react/prop-types */
import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'abs_onHoverHidden',
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({ view: 'abs_onHoverDisplay' });
  }

  hide() {
    this.setState({ view: 'abs_onHoverHidden' });
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
      <div className="abs_productcard" key={idx} onMouseEnter={this.show} onMouseLeave={this.hide} title="itemtest">
        <div className="abs_productimg"><a className="abs_link" href={`https://www.rei.com/search?q=${searchItem}`}><img alt={item.name} src={`${item.img_url}/sig=${item.itemNum}`} /></a></div>
        <a className="abs_link" href={`https://www.rei.com/search?q=${searchItem}`}>
          <div className="abs_brandname">{item.brand}</div>
          <div className="abs_productname">{item.name}</div>
        </a>
        <div className="abs_rating">
          <span
            className="abs_stars"
            style={{
              background: `linear-gradient(90deg, #ffd280, #ffd280 ${getStars(item.rating)}%, #d19646, #d19646 ${getStars(item.rating)}%, transparent, transparent ${getStars(item.rating) + 2}%)`,
              WebkitTextStroke: '1px #d19646',
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
            }}
          >
            ★★★★★
          </span>
          <span className="abs_reviewers">
            (
            {item.reviews}
            )
          </span>
        </div>
        <div className="abs_price">
          $
          {item.price}
          .98
        </div>
        <div className={view}>
          <span className="abs_description">
            {item.description}
            .
          </span>
          <span className="abs_color">
            <b>Colors:</b>
            {item.colors.map((color, idx2) => (
              <span
                className="abs_colorBlock"
                style={{ color }}
                key={idx2}
              >
                ■
              </span>
            ))}
          </span>
          <span className="abs_features">
            <b>Features:</b>
            <ul>
              <li>{item.features[0]}</li>
              <li>{item.features[1]}</li>
            </ul>
          </span>
          <div className="abs_buttons">
            <span>
              <button className="abs_cart" type="button">
                Add to cart -- $
                {item.price}
                .98
              </button>
            </span>
            <span className="abs_wishreg">
              <button className="abs_util" type="button">Wish list</button>
              <button className="abs_util" type="button">Registry</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
