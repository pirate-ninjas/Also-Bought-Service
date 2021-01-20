import React from 'react';
import axios from 'axios';
import ItemList from './ItemList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alsoliked: [],
      ultbought: [],
    };
    this.alsoLiked = this.alsoLiked.bind(this);
    this.ultBought = this.ultBought.bind(this);
  }

  componentDidMount() {
    this.alsoLiked(25);
    this.ultBought(25);
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
        this.setState({ ultbought: res.data });
      });
  }

  render() {
    const { alsoliked, ultbought } = this.state;
    return (
      <div className="container">
        <span id="title">People also liked</span>
        <div id="carousel1">
          <ItemList items={alsoliked} id="alsoliked" mod={1} />
        </div>
        <span id="title">People ultimately bought</span>
        <div id="carousel2">
          <ItemList items={ultbought} id="ultbought" mod={0} />
        </div>
      </div>
    );
  }
}

export default App;
