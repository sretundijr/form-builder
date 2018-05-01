import React, { Component } from 'react';

import { inputFieldNoLabel } from '../element-creation-components/form-elements';

import '../styles/form-view.css';

class FormView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementList: [],
      element: '',
      isEditing: false,
      elementIndex: '',
    }
    this.onLabelChange = this.onLabelChange.bind(this);
    this.onOptionsChange = this.onOptionsChange.bind(this);
    this.saveEditedChanges = this.saveEditedChanges.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      elementList: nextProps.elementList,
      saveChanges: nextProps.saveChanges,
    }
  }

  handleUserSelectedElementEvent(elementObj, index) {
    this.setState({
      element: elementObj,
      isEditing: true,
      elementIndex: index,
    })
  }

  onLabelChange(e) {
    const stateObjCopy = { ...this.state.element };
    stateObjCopy.label = e.target.value;
    const elementListCopy = [...this.state.elementList];
    elementListCopy[this.state.elementIndex] = stateObjCopy;
    this.setState({
      element: stateObjCopy,
      elementList: elementListCopy,
    })
  }

  onOptionsChange(e, index) {
    const stateObjCopy = { ...this.state.element };
    const elementListCopy = [...this.state.elementList];
    elementListCopy[this.state.elementIndex].options[index] = { value: e.target.value };
    this.setState({
      element: stateObjCopy,
      elementList: elementListCopy,
    })
  }

  saveEditedChanges() {
    this.setState({
      isEditing: false,
    }, this.state.saveChanges(this.state.elementList))
  }

  renderSaveButton() {
    return (
      <div className="button-list-container" >
        <button
          type="button"
          className="edit-component-btn"
          onClick={this.saveEditedChanges}
        >Save Changes</button>
      </div>
    )
  }

  renderEditForm() {
    if (this.state.isEditing) {
      let optionsContainer = '';
      if (this.state.element.options) {
        const optionsList = this.state.element.options.map((item, index) => {
          return (
            <div key={`edit-option-${index}`} className="edit-label-container">
              {inputFieldNoLabel(item.value, (e) => this.onOptionsChange(e, index))}
            </div>
          )
        })
        optionsContainer = (
          <div>
            <h4 className="component-list-header">Options</h4>
            {optionsList}
          </div>
        )
      }
      return (
        <div>
          <h4 className="component-list-header" >Form Component Label</h4>
          <div className="edit-label-container">
            {inputFieldNoLabel(this.state.element.label, this.onLabelChange)}
          </div>
          {optionsContainer ? optionsContainer : ''}
          {this.renderSaveButton()}
        </div>
      )
    }
    return '';
  }

  renderElementListInterface() {
    if (this.state.elementList.length > 0) {
      const buttonList = this.state.elementList.map((item, index) => {
        return (
          <button
            key={`element-btn-${index}`}
            type="button"
            className="edit-component-btn"
            onClick={() => this.handleUserSelectedElementEvent(item, index)}
            value={item.name}
          >{item.name}</button>
        )
      })
      return (
        <div>
          <h4 className="component-list-header" >Select a form component to Edit</h4>
          <div className="button-list-container" >
            {buttonList}
          </div>
        </div>
      )
    }
    return '';
  }

  renderElementList(list) {
    if (list.length > 0) {
      return list.map((item, index) => {
        const formObj = { ...item };
        const getElement = item.element;
        delete formObj['element'];
        return (
          <div key={`${item.label}-${index}`}>
            {getElement(formObj)}
          </div>
        );
      })
    }
    return '';
  }

  render() {
    return (
      <div>
        <h3 className="form-view-header" >Form preview</h3>
        {this.renderElementListInterface()}
        {this.renderEditForm()}
        {this.renderElementList(this.state.elementList)}
      </div>
    )
  }
}

export { FormView };
