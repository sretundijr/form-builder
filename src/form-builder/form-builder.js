import React, { Component } from 'react';

import { FormSelection } from './form-selection';

import { RenderElementCreationForm } from './element-creation-components/element-creation-form';

import { FormView } from './form-view';

import { getAllFormTypes, filterByName } from './form-model';

import './styles/form-builder.css';

// todo change selected element, no need to pass the function attached to it around
// multiply times
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

  handleFormComponentSelection(e) {
    this.setState({
      selectedElement: filterByName(e.target.value)[0],
    })
  }

  handleElementCreation(formState) {
    this.setState((prevState) => {
      const elementObj = Object.assign({}, ...prevState.selectedElement, formState);
      elementObj.element = prevState.selectedElement.element;
      return {
        elementList: [...prevState.elementList, elementObj],
        selectedElement: '',
      }
    });
  }

  // todo bug fix clear selected item when a user chooses a new element w/o submission
  render() {
    return (
      <div className="form-builder-container">
        <div className="tool-box-container">
          <h3 className="element-selection-header" >Choose from the form components below to start building the form</h3>
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
