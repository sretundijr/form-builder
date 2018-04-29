import React, { Component } from 'react';

import { unorderedList, textInput } from './form-elements';

// todo submit button need a label??
// todo add event for required options
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
  }

  handleLabelChangeEvent(e) {
    this.setState({
      label: e.target.value,
    })
  }

  handleOptionsChangeEvent(e) {
    this.setState({
      option: e.target.value
    })
  }

  // todo need atleast one option for radio or drop list before submission
  handleFormSubmit(e) {
    e.preventDefault();
    const formState = {
      label: this.state.label,
      options: this.state.options,
    }
    this.setState({
      label: '',
      options: [],
    }, this.props.onSubmit(formState))
  }

  addOption() {
    const currentOption = this.state.option;
    this.setState((prevState) => {
      return {
        options: [...prevState.options, currentOption],
        option: '',
      }
    })
  }

  // todo refactor options name isOptions??
  renderElementOptionsInput(options) {
    if (options) {
      const inputAttributes = {
        label: 'You have selected a form element that requires options',
        name: 'options',
        id: 'options-input',
        value: this.state.option,
        isRequired: false,
      }
      return (
        <div>
          {textInput(inputAttributes, this.handleOptionsChangeEvent)}
          <button type="button" onClick={this.addOption}>Add</button>
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
      isRequired: true,
    };
    return textInput(inputAttributes, this.handleLabelChangeEvent);
  }

  // todo add option for user to make the field required or not
  // todo add name field
  render() {
    if (this.props.selectedElement) {
      return (
        <div>
          <form
            className="element-creation-form"
            onSubmit={this.handleFormSubmit}
          >
            {this.renderLabelInput(this.props.selectedElement.type)}
            {/* todo change this to check box?? */}
            <div>
              <p>Is this field required, default is Yes</p>
              <label>Yes</label>
              <input type="radio" value="true" />
              <label>No</label>
              <input type="radio" value="false" />
            </div>
            {unorderedList(this.state.options)}
            {this.renderElementOptionsInput(this.props.selectedElement.options)}
            <input className="form-selection-btn" type="submit" value="submit" />
          </form>
        </div >
      )
    }
    return '';
  }
}

export { RenderElementCreationForm }

