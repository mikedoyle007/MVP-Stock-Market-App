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
      stocks: [
        ['Facebook', 172]
      ],
      stockInput: ''
    }
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
    axios.get(url)
      .then(({ data }) => {
        const price = data.split(',')[20];
        console.log('response is : ', price);
        // this.setState({stocks: ['Facebook', price]});
      })
      .catch((err) => {
        console.log('error retrieving stock information ', err);
      });
  }

  handleChange (event) {
    this.setState({
      stockInput: event.target.value
    });
  }

  render() {
    return(
      <div>
        <input placeholder="search stocks" value={this.state.stockInput} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleChange.bind(this)} type="submit">Search</button>
        <StockList stocks={this.state.stocks} />
      </div>
    );
  }
};

module.exports = App;
