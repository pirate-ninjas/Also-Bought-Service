import React from 'react';
import axios from 'axios';
import ItemList from './ItemList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alsoliked: [],
      ultbought: [],
      ultprod: '',
      item: 33,
    };
    this.alsoLiked = this.alsoLiked.bind(this);
    this.ultBought = this.ultBought.bind(this);
  }

  componentDidMount() {
    const { item } = this.state;
    this.alsoLiked(item);
    this.ultBought(item);
  }

  alsoLiked(item) {
    axios.get(`/api/products/${item}/alsoliked`)
      .then((res) => {
        this.setState({ alsoliked: res.data });
      });
  }

  ultBought(item) {
    axios.get(`/api/products/${item}/ultbought`)
      .then((res) => {
        this.setState({ ultbought: res.data, ultprod: res.data[0].name });
      });
  }

  render() {
    const { alsoliked, ultbought, ultprod } = this.state;
    return (
      <div className="container">
        <span id="title">People also liked</span>
        <div id="carousel1">
          <ItemList key="carousel1" items={alsoliked} mod={1} />
        </div>
        <span id="title">
          People shopping
          {' '}
          {ultprod}
          {' '}
          ultimately bought
        </span>
        <div id="carousel2">
          <ItemList key="carousel2" items={ultbought} mod={-1} />
        </div>
      </div>
    );
  }
}

export default App;
