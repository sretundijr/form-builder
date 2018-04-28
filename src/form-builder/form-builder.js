import React, { Component } from 'react';

import { FormSelection, RenderElementCreationForm } from './form-selection';

import { FormView } from './form-view';

import { formTagList } from './form-model';

import './styles/form-builder.css';

class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      elementOptions: [],
      selectedElement: '',
      elementList: [],
    }
    this.handleFormComponentSelection = this.handleFormComponentSelection.bind(this);
    this.handleElementCreation = this.handleElementCreation.bind(this);
    this.handleLabelChange = this.handleLabelChange.bind(this);
  }

  returnSelectedElement(selection) {
    return formTagList().filter(item => item.type === selection);
  }

  handleFormComponentSelection(e) {
    this.setState({
      selectedElement: this.returnSelectedElement(e.target.value)[0],
    })
  }

  handleLabelChange(e) {
    console.log(e.target.name)
    if (e.target.name === 'options') {
      this.setState((prevState) => {
        return { elementOptions: [...prevState.elementOptions, e.target.value] }
      });
    } else {
      this.setState({
        label: e.target.value,
      })
    }
  }

  handleElementCreation(e) {
    e.preventDefault();

    // todo may not need the callback here, use current state
    // and possibly combine label and element options into selected element object
    this.setState((prevState) => {
      const elementObj = {
        selectedElement: prevState.selectedElement,
        label: prevState.label,
        elementOptions: prevState.elementOptions,
      }
      return {
        elementList: [...prevState.elementList, elementObj]
      }
    });
  }

  render() {
    return (
      <div className="form-builder-container">
        <div className="tool-box-container">
          <FormSelection
            onClick={this.handleFormComponentSelection}
          />
          <RenderElementCreationForm
            onSubmit={this.handleElementCreation}
            selectedElement={this.state.selectedElement}
            onChange={this.handleLabelChange}
            value={this.state.label}
          />
        </div>
        <div className="form-container">
          <p>Form Output</p>
          <FormView elementList={this.state.elementList} />
        </div>
      </div>
    );
  }
}

export default FormBuilder;
