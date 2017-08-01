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
      searchTerm: ''
    }
  }

  handleChange (event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSearch () {
    console.log('term that was searched', this.state.searchTerm);
    const term = this.state.searchTerm;
    axios.post('/search', { name: term })
      .then((response) => {
        let newStock = response.data;
        let savedStocks = this.state.stocks;
        savedStocks.push(newStock);
        this.setState({
          stocks: savedStocks
        });
      })
      .catch((err) => {
        console.log('ERROR: axios post request sent unsuccessfully to server');
      });
    
    
    this.setState({
      searchTerm: ''
    });
  }
  
  render() {
    return(
      <div>
        <input placeholder="search stocks" value={this.state.searchTerm} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleSearch.bind(this)}>Search</button>
        <StockList stocks={this.state.stocks} />
      </div>
    );
  }
};

module.exports = App;