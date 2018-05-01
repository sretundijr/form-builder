import React, { Component } from 'react';

import { FormSelection } from './form-selection';

import { RenderElementCreationForm } from './element-creation-components/element-creation-form';

import { FormView } from './form-view-components/form-view';

import { getAllFormTypes, filterByName } from './form-model';

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
    this.saveEditedChangesInFormView = this.saveEditedChangesInFormView.bind(this);
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
      elementObj.name = prevState.selectedElement.name;
      return {
        elementList: [...prevState.elementList, elementObj],
        selectedElement: '',
      }
    });
  }

  saveEditedChangesInFormView(list) {
    this.setState({
      elementList: list,
    })
  }

  render() {
    return (
      <div className="form-builder-container">
        <div className="tool-box-container">
          <h3 className="element-selection-header" >
            Choose from the form components below to start building the form
          </h3>
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
          <FormView
            elementList={this.state.elementList}
            saveChanges={this.saveEditedChangesInFormView}
          />
        </div>
      </div>
    );
  }
}

export default FormBuilder;
