import React from 'react';
import ReactDOM from 'react-dom';
import StockList from './StockList.jsx';
import axios from 'axios';
import cors from 'cors';

const api_key = 'uz2s6s5WS86ZeASb5qnE';
const url = `https://www.quandl.com/api/v3/datasets/WIKI/FB/data.csv?api_key=${api_key}`;

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      stocks: []
    }
    this.search = this.search.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
    axios.get(url)
      .then(({ data }) => {
        const price = data.split(',')[20];
        console.log('response is : ', price);
        this.setState({stocks: ['Facebook', price]});
      })
      .catch((err) => {
        console.log('error retrieving stock information ', err);
      });
    // use axios to retrieve stocks in database
    // store in this.state.stocks array using setState
    // render to StockList component
  }

  search (phrase) {
    console.log(`${phrase} was searched`);
  }

  addStock() {

  }

  render() {
    return(
      <div>
        <form onSubmit={this.addStock}>
          <input type="text" placeholder="search stocks"/>
          <input type="submit" />
          <StockList stocks={this.state.stocks} />
        </form>
      </div>
    );
  }
};

module.exports = App;
