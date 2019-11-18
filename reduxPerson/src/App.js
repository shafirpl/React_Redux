import React, { Component } from 'react';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="col-12">
            <Persons />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
