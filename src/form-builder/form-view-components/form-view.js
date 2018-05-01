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

  renderEditForm() {
    if (this.state.isEditing) {
      if (this.state.element.options) {
        const optionsList = this.state.element.options.map((item, index) => {
          return inputFieldNoLabel(item.value, (e) => this.onOptionsChange(e, index))
        })
        return (
          <div>
            <p>label</p>
            {inputFieldNoLabel(this.state.element.label, this.onLabelChange)}
            <div>
              <p>Options</p>
              {optionsList}
            </div>
            <div>
              <button
                type="button"
                className="add-options-btn"
                onClick={this.saveEditedChanges}
              >Save Changes</button>
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <p>label</p>
            {inputFieldNoLabel(this.state.element.label, this.onLabelChange)}
            <div>
              <button
                type="button"
                className="add-options-btn"
                onClick={this.saveEditedChanges}
              >Save Changes</button>
            </div>
          </div>
        )
      }
    }
    return '';
  }

  renderElementListInterface() {
    if (this.state.elementList.length > 0) {
      const buttonList = this.state.elementList.map((item, index) => {
        return (
          <button
            type="button"
            className="add-options-btn"
            onClick={() => this.handleUserSelectedElementEvent(item, index)}
            value={item.name}
          >{item.name}</button>
        )
      })
      return (
        <div>
          <h4>Edit</h4>
          {buttonList}
        </div>
      )
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
