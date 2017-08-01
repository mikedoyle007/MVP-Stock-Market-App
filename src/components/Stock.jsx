import React from 'react';
import ReactDOM from 'react-dom';

class Stock extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p>{this.props.stocks[0]}</p>
      </div>
    );
  }
};

module.exports = Stock;