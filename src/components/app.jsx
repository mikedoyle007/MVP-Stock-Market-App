import React from 'react';
import ReactDOM from 'react-dom';
import StockList from './StockList.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      stocks: []
    };
  }

  render() {
    return(
      <div>
        <StockList />
      </div>
    );
  }
};

module.exports = App;