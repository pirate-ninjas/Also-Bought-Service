import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 4,
    };
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  componentDidMount() {
  }

  slideRight() {
    let { start, end } = this.state;
    const { items } = this.props;
    if (!(end + 1 >= items.length)) {
      start += 1;
      end += 1;
      this.setState({ start, end });
    }
  }

  slideLeft() {
    let { start, end } = this.state;
    if (!(start - 1 < 0)) {
      start -= 1;
      end -= 1;
      this.setState({ start, end });
    }
  }

  render() {
    let { mod, items } = this.props;
    const { start, end } = this.state;
    items = items.slice(start, end);
    items = items.map((item, idx) => (
      <Item item={item} idx={start + idx} mod={mod} />
    ));
    return (
      <div className="carousel">
        <div className="slideLeft" onClick={this.slideLeft}>←</div>
        <div className="tray">
          <div className="productSlide">{items}</div>
        </div>
        <div className="slideRight" onClick={this.slideRight}>→</div>
      </div>
    );
  }
}

export default ItemList;
