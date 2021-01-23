/* eslint-disable react/prop-types */
import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 4,
      leftButton: 'hidden',
      rightButton: 'visible',
    };
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
    this.hideButtons = this.hideButtons.bind(this);
  }

  hideButtons(start, end) {
    const { leftButton, rightButton } = this.state;
    const { items } = this.props;
    if (start === 0) {
      this.setState({ leftButton: 'hidden' });
    }
    if (start > 0 && leftButton !== 'visible') {
      this.setState({ leftButton: 'visible' });
    }
    if (end === items.length) {
      this.setState({ rightButton: 'hidden' });
    }
    if (end < items.length && rightButton !== 'visible') {
      this.setState({ rightButton: 'visible' });
    }
  }

  slideRight() {
    let { start, end } = this.state;
    const { items } = this.props;
    if (!(end + 1 > items.length)) {
      start += 1;
      end += 1;
      this.setState({ start, end });
    }
    this.hideButtons(start, end);
  }

  slideLeft() {
    let { start, end } = this.state;
    if (!(start - 1 < 0)) {
      start -= 1;
      end -= 1;
      this.setState({ start, end });
    }
    this.hideButtons(start, end);
  }

  render() {
    let { items } = this.props;
    const { mod } = this.props;
    const {
      start, end, leftButton, rightButton,
    } = this.state;
    const rightVis = items.length > 4 ? rightButton : 'hidden';
    items = items.slice(start, end);
    items = items.map((item, idx) => (
      <Item data-testid="items" key={idx * mod} item={item} idx={start + idx} mod={mod} />
    ));
    return (
      <div className="carousel">
        <div
          className="slideLeft"
          role="button"
          tabIndex={0}
          style={{ visibility: leftButton }}
          onClick={this.slideLeft}
          onKeyDown={this.slideLeft}
        >
          ←
        </div>
        <div className="tray">
          <div className="productSlide">
            {items}
          </div>
        </div>
        <div
          className="slideRight"
          role="button"
          tabIndex={0}
          style={{ visibility: rightVis }}
          onClick={this.slideRight}
          onKeyDown={this.slideRight}
        >
          →
        </div>
      </div>
    );
  }
}

export default ItemList;
