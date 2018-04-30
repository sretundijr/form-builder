import React, { Component } from 'react';

import FormBuilder from './form-builder/form-builder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="form-component-container">
          <FormBuilder />
        </div>
      </div>
    );
  }
}

export default App;
