import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FormBuilder from './form-builder/form-builder';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <div className="form-component-container">
          <FormBuilder />
        </div>
      </div>
    );
  }
}

export default App;
