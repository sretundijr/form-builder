import React, { Component } from 'react';

import { FormSelection } from './form-selection';

import { RenderElementCreationForm } from './element-creation-components/element-creation-form';

import { FormView } from './form-view';

import { getAllFormTypes, formTagList } from './form-model';

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

  handleElementCreation(formState) {
    // todo may not need the callback here, use current state
    // and possibly combine label and element options into selected element object
    this.setState((prevState) => {
      const elementObj = {
        selectedElement: prevState.selectedElement,
        label: formState.label,
        elementOptions: formState.options,
        requiredField: formState.requiredField,
      }
      return {
        elementList: [...prevState.elementList, elementObj],
        selectedElement: '',
      }
    });
  }

  // todo bug fix clear selected item when a user chooses a new element w/o submission
  render() {
    // console.log(this.state);
    return (
      <div className="form-builder-container">
        <div className="tool-box-container">
          <FormSelection
            list={getAllFormTypes()}
            onClick={this.handleFormComponentSelection}
          />
          <RenderElementCreationForm
            onSubmit={this.handleElementCreation}
            selectedElement={this.state.selectedElement}
          />
        </div>
        <div className="form-container">
          <FormView elementList={this.state.elementList} />
        </div>
      </div>
    );
  }
}

export default FormBuilder;
