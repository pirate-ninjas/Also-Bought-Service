import React from 'react';
import axios from 'axios';
import ItemList from './ItemList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.alsoLiked = this.alsoLiked.bind(this);
  }

  componentDidMount() {
    this.alsoLiked(50);
  }

  alsoLiked(item) {
    axios.get(`/api/products/${item}/alsoliked`)
      .then((res) => {
        this.setState({ items: res.data });
      });
  }

  render() {
    const { items } = this.state;
    return (
      <ItemList items={items} />
    );
  }
}

export default App;
