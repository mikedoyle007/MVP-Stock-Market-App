import React from 'react';
import ReactDOM from 'react-dom';
import Stock from './Stock.jsx';
import Price from './Price.jsx';

class StockList extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('props that were passed into stocklist are ', this.props);
  }

  render() {
    return(
      <div>
        {
          this.props.stocks.map( stock => 
          <div>
            <br/>
            <Stock stocks={stock} />
            <Price stocks={stock} />
          </div>
        )}
      </div>
    );
  }
};

module.exports = StockList;