import React, { Component } from 'react';

import { getAllFormTypes } from './form-model';

class FormSelection extends Component {

  formSelectionBtn() {
    return getAllFormTypes().map(item => <button key={item}>{item}</button>)
  }

  render() {
    return (
      <div>
        <p>Form Types</p>
        {this.formSelectionBtn()}
      </div>
    );
  }
}

export default FormSelection;
