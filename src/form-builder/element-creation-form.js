import React, { Component } from 'react';

// todo submit button need a label??
// todo add event for required radio input
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

  renderElementOptions(options) {
    if (options) {
      return (
        <div>
          <input
            name="options"
            type="text"
            onChange={this.handleOptionsChangeEvent}
            value={this.state.option} />
          <button type="button" onClick={this.addOption}>Add</button>
        </div>
      )
    }
    return '';
  }

  renderOptions() {
    if (this.state.options.length > 0) {
      return (
        <div>
          <ul>
            {this.state.options.map((item, index) => {
              return (
                <li key={`options-list-${index}`}>{item}</li>
              )
            })}
          </ul>
        </div>
      )
    }
    return '';
  }

  // todo add option for user to make the field required or not
  // todo add name field
  render() {
    // console.log(this.state);
    if (this.props.selectedElement) {
      return (
        <div>
          <form
            className="element-creation-form"
            onSubmit={this.handleFormSubmit}
          >
            <label>Please add a label for the {this.props.selectedElement.type}</label>
            <input
              required
              name="label"
              className="label-input"
              type="text"
              onChange={this.handleLabelChangeEvent}
              value={this.state.label}
            />
            <div>
              <p>Is this field required, default is Yes</p>
              <label>Yes</label>
              <input type="radio" value="true" />
              <label>No</label>
              <input type="radio" value="false" />
            </div>
            {this.renderOptions()}
            {this.renderElementOptions(this.props.selectedElement.options)}
            <input className="form-selection-btn" type="submit" value="submit" />
          </form>
        </div >
      )
    }
    return '';
  }
}

export { RenderElementCreationForm }

