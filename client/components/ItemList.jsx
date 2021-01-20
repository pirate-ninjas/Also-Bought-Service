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
    items = items.map((item, idx) => (
      <div className="productcard" key={idx}>
        <div className="productimg"><img alt="product" src={`${item.img_url}/sig=${idx}`} /></div>
        <div className="brandname">{item.brand}</div>
        <div className="productname">{item.name}</div>
        <div className="rating">
          {/* <span className="starsFilled">
            {getStars(item.rating).filled}
          </span>
          <span className="starsBlank">
            {getStars(item.rating).blank}
          </span> */}
          <span className="stars" 
            style={{
              background: `linear-gradient(90deg, gold, gold ${getStars(item.rating)}%, transparent, transparent ${getStars(item.rating)}%)`,
              WebkitTextStroke: '1px goldenrod',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>★★★★★</span>
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
        <br />
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
