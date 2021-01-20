import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { items, id, mod } = this.props;
    items = items.map((item, idx) => (
      <Item item={item} idx={idx} mod={mod} />
    ));
    return (
      <div id={id}>
        <div className={id}>{items}</div>
      </div>
    );
  }
}

export default ItemList;
