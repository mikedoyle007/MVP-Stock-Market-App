import React from 'react';
import ReactDOM from 'react-dom';
import Stock from './Stock.jsx';
import Price from './Price.jsx';

class StockList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Stock />
        <Price />
      </div>
    );
  }
};

module.exports = StockList;