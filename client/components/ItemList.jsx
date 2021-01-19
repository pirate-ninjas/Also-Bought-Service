import React from 'react';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { items } = this.props;
    items = items.map((item, idx) => (
      <div className="productcard" key={idx}>
        <div className="productimg"><img alt="product" src={`${item.img_url}/sig=${idx}`} /></div>
        <div className="brandname">{item.brand}</div>
        <div className="productname">{item.name}</div>
        <div className="rating">
          <span className="stars">
            ★★★★★
            {/* {item.rating} */}
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
        <br />
      </div>
    ));
    return (
      <div className="alsoBought">{items}</div>
    );
  }
}

export default ItemList;
