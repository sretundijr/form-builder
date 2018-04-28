import React, { Component } from 'react';

import { FormSelection } from './form-selection';

import { RenderElementCreationForm } from './element-creation-form';

import { FormView } from './form-view';

import { formTagList } from './form-model';

import './styles/form-builder.css';

class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement: '',
      elementList: [],
    }
    this.handleFormComponentSelection = this.handleFormComponentSelection.bind(this);
    this.handleElementCreation = this.handleElementCreation.bind(this);
  }

  returnSelectedElement(selection) {
    return formTagList().filter(item => item.type === selection);
  }

  handleFormComponentSelection(e) {
    this.setState({
      selectedElement: this.returnSelectedElement(e.target.value)[0],
    })
  }

  handleElementCreation(e, formState) {
    e.preventDefault();
    // todo may not need the callback here, use current state
    // and possibly combine label and element options into selected element object
    this.setState((prevState) => {
      const elementObj = {
        selectedElement: prevState.selectedElement,
        label: formState.label,
        elementOptions: formState.options,
      }
      return {
        elementList: [...prevState.elementList, elementObj],
      }
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="form-builder-container">
        <div className="tool-box-container">
          <FormSelection
            onClick={this.handleFormComponentSelection}
          />
          <RenderElementCreationForm
            onSubmit={this.handleElementCreation}
            selectedElement={this.state.selectedElement}
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
