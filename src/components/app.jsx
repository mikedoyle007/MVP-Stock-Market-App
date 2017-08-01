import React from 'react';
import ReactDOM from 'react-dom';
import StockList from './StockList.jsx';
import axios from 'axios';
import cors from 'cors';

// TODO: clear out stocks when finished
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      stocks: [
        ['Facebook', 172],
        ['Apple', 1000]
      ],
      stockInput: ''
    }
  }

  // componentDidMount() {
  //   const api_key = 'uz2s6s5WS86ZeASb5qnE';
  //   const url = `https://www.quandl.com/api/v3/datasets/WIKI/FB/data.csv?api_key=${api_key}`;
  //   // query database
  //   axios.get(url)
  //     .then(({ data }) => {
  //       //TODO: this should get results from database only
  //       const price = data.split(',')[20];
  //       console.log('response is : ', price);
  //       // this.setState({stocks: ['Facebook', price]});
  //     })
  //     .catch((err) => {
  //       console.log('error retrieving stock information ', err);
  //     });
  // }

  handleChange (event) {
    this.setState({
      stockInput: event.target.value
    });
    //TODO: this should send the user's input as a post request to the server
    // app.post('/server', (req, res) => {
      const api_key = 'uz2s6s5WS86ZeASb5qnE';
      let userInput = this.state.stockInput;
      console.log('userinput = ', userInput);
      const url = `https://www.quandl.com/api/v3/datasets/WIKI/${userInput}/data.csv?api_key=${api_key}`;

      axios.get(url)
      .then(({ data }) => {
        const name = this.state.stockInput;
        const price = data.split(',')[20];
        const stockList = this.state.stocks;
        stockList.push([name, price]);

        this.setState({
          stocks: stockList
        });

        let stockEntry = new StockEntry({
          name: name,
          price: price
        })
        .save((err, response) => {
          if (err) {
            console.log('error inside handle change request to stock api', err);
          }
        });
      })
      .then(() => {
        res.send(200);
      })
      .catch((err) => {
        console.log('error retrieving stock information ', err);
      });
    // });
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
