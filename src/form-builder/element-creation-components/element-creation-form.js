import React, { Component } from 'react';

import { unorderedList, inputField, submitInput } from './form-elements';

import '../styles/element-creation-form.css';

class RenderElementCreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      requiredField: true,
      option: '',
      options: [],
    }
    this.handleLabelChangeEvent = this.handleLabelChangeEvent.bind(this);
    this.handleOptionsChangeEvent = this.handleOptionsChangeEvent.bind(this);
    this.addOption = this.addOption.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleIsRequiredInputChange = this.handleIsRequiredInputChange.bind(this);
    this.handleRemoveOptionEvent = this.handleRemoveOptionEvent.bind(this);
  }

  handleLabelChangeEvent(e) {
    this.setState({
      label: e.target.value,
    })
  }

  handleOptionsChangeEvent(e) {
    this.setState({
      option: e.target.value,
    })
  }

  handleRemoveOptionEvent() {
    this.setState((prevState) => {
      prevState.options.pop();
      return { options: prevState.options };
    });
  }

  handleIsRequiredInputChange(e) {
    this.setState((prevState) => {
      return {
        requiredField: !prevState.requiredField,
      };
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const formState = {
      label: this.state.label,
      required: this.state.requiredField,
    }
    if (this.props.selectedElement.hasOptions) {
      formState.options = this.state.options;
    }

    if (this.props.selectedElement.hasOptions && formState.options < 1) {
      alert('Drop down lists and radio inputs need atleast one option');
    } else {
      this.setState({
        label: '',
        options: [],
      }, this.props.onSubmit(formState))
    }
  }

  addOption() {
    const currentOption = { value: this.state.option };
    this.setState((prevState) => {
      return {
        options: [...prevState.options, currentOption],
        option: '',
      }
    })
  }

  renderRemoveOptionBtn() {
    if (this.state.options.length > 0) {
      return (
        <button
          type="button"
          className="add-options-btn"
          onClick={this.handleRemoveOptionEvent}
        >Remove Option</button>
      )
    }
  }

  renderElementOptionsInput(options) {
    if (options) {
      const inputAttributes = {
        label: 'You have selected a form element that requires a list of options that your vistor can choose from.',
        name: 'options',
        id: 'options-input',
        value: this.state.option,
        required: false,
        type: 'text',
      }
      return (
        <div className="add-options-container">
          {inputField(inputAttributes, this.handleOptionsChangeEvent)}
          <button
            className="add-options-btn"
            type="button"
            onClick={this.addOption}
          >Add Option</button>
          {this.renderRemoveOptionBtn()}
        </div>
      )
    }
    return '';
  }

  renderLabelInput(type) {
    const inputAttributes = {
      label: `Please add a label for the ${type}`,
      name: 'label',
      id: 'label-input',
      value: this.state.label,
      required: true,
      type: 'text',
    };
    return inputField(inputAttributes, this.handleLabelChangeEvent);
  }

  renderIsRequiredCheckBox() {
    const inputAttributes = {
      label: 'Is this field required?',
      name: 'required',
      id: 'required-field',
      value: true,
      required: false,
      type: 'checkbox',
      checked: this.state.requiredField,
    };
    return inputField(inputAttributes, this.handleIsRequiredInputChange)
  }

  renderUnorderedList() {
    if (this.props.selectedElement.hasOptions) {
      return unorderedList(this.state.options);
    }
  }

  render() {
    if (this.props.selectedElement) {
      return (
        <div>
          <form
            onSubmit={this.handleFormSubmit}
          >
            {this.renderLabelInput(this.props.selectedElement.name)}
            {this.renderIsRequiredCheckBox()}
            {this.renderElementOptionsInput(this.props.selectedElement.hasOptions)}
            {this.renderUnorderedList()}
            {submitInput()}
          </form>
        </div >
      )
    }
    return '';
  }
}

export { RenderElementCreationForm }

