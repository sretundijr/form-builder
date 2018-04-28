import React, { Component } from 'react';

import { FormSelection, RenderLabel } from './form-selection';

import './form-builder.css';

class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelections: [],
    }
    this.handleFormComponentSelection = this.handleFormComponentSelection.bind(this);
  }
  handleFormComponentSelection(e) {
    console.log(e.target.value)
    const userSelection = {
      formType: e.target.value
    }
    this.setState((prevState) => {
      return {
        userSelections: [...prevState.userSelections, userSelection]
      }
    })
  }
  handleLabelCreation(e) {
    console.log(e.target);
  }
  render() {
    console.log(this.state.userSelections);
    return (
      <div className="form-builder-container">
        <div className="tool-box-container">
          <FormSelection
            onClick={this.handleFormComponentSelection}
          />
          <RenderLabel
            onChange={this.handleLabelCreation}
            userSelection={
              this.state.userSelections ?
                this.state.userSelections[this.state.userSelections.length - 1] :
                ''
            }
          />
        </div>
        <div className="form-container">
          <p>Form Output</p>
        </div>
      </div>
    );
  }
}

export default FormBuilder;
