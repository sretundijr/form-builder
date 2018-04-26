import React, { Component } from 'react';

import FormSelection from './form-selection';

import './form-builder.css';

class FormBuilder extends Component {
  render() {
    return (
      <div className="form-builder-container">
        <div className="tool-box-container">
          <FormSelection />
        </div>
        <div className="form-container">
          <p>Form Output</p>
        </div>
      </div>
    );
  }
}

export default FormBuilder;
