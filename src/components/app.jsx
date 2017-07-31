import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
       Webpack is alive and well!
      </div>
    );
  }
};

module.exports = App;