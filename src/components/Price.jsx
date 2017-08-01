import React from 'react';
import ReactDOM from 'react-dom';

class Price extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p>${this.props.stocks[1]}</p>
      </div>
    );
  }
};

module.exports = Price;