import React from 'react';
import axios from 'axios';
import ItemList from './ItemList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      vis: 'onHoverHidden',
    };
    this.alsoLiked = this.alsoLiked.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    this.alsoLiked(50);
  }

  show() {
    this.setState({ vis: 'onHoverDisplay' });
  }

  hide() {
    this.setState({ vis: 'onHoverHidden' });
  }

  alsoLiked(item) {
    axios.get(`/api/products/${item}/alsoliked`)
      .then((res) => {
        this.setState({ items: res.data });
      });
  }

  render() {
    const { items } = this.state;
    const { vis } = this.state;
    return (
      <ItemList items={items} vis={vis} show={this.show} hide={this.hide} />
    );
  }
}

export default App;
