import React, { Component } from 'react';

import { FormSelection, RenderLabel } from './form-selection';

import './styles/form-builder.css';

class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      userSelection: '',
      elementList: [],
    }
    this.handleFormComponentSelection = this.handleFormComponentSelection.bind(this);
    this.handleElementCreation = this.handleElementCreation.bind(this);
    this.handleLabelChange = this.handleLabelChange.bind(this);
  }
  handleFormComponentSelection(e) {
    this.setState({
      userSelection: e.target.value,
    })
  }

  handleLabelChange(e) {
    this.setState({
      label: e.target.value,
    })
  }

  handleElementCreation(e) {
    e.preventDefault();

    this.setState((prevState) => {
      const elementObj = {
        userSelection: prevState.userSelection,
        label: prevState.label,
      }
      return {
        elementList: [...prevState.elementList, elementObj]
      }
    });
  }

  render() {
    console.log(this.state.elementList);
    return (
      <div className="form-builder-container">
        <div className="tool-box-container">
          <FormSelection
            onClick={this.handleFormComponentSelection}
          />
          <RenderLabel
            onSubmit={this.handleElementCreation}
            userSelection={this.state.userSelection}
            onChange={this.handleLabelChange}
            value={this.state.label}
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
