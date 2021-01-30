import React, { lazy } from 'react';
import axios from 'axios';

const ItemList = lazy(() => import('./ItemList'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alsoliked: [],
      ultbought: [],
      ultprod: '',
      item: 50,
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
      <div className="abs_container">
        <span className="abs_title">People also liked</span>
        <div id="carousel1">
          <ItemList key="carousel1" items={alsoliked} mod={1} />
        </div>
        <span className="abs_title">
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
