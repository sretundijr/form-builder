import React from 'react';

import { getAllFormTypes } from './form-model';

import './styles/form-selection.css';

const formSelectionBtn = (props) => {
  return getAllFormTypes().map(item =>
    <button
      onClick={props.onClick}
      key={item}
      value={item}
      className="form-selection-btn"
    >
      {item}
    </button>
  )
}

const renderElementOptions = (options) => {
  if (options) {
    return (
      <div>
        <p>hello</p>
        <input name="options" type="text" value="" />
      </div>
    )
  }
  return '';
}

// todo submit button need a label??
const RenderElementCreationForm = (props) => {
  console.log(props);
  if (props.selectedElement) {
    return (
      <div>
        <form className="element-creation-form" onSubmit={props.onSubmit}>
          <label>Please add a label for the {props.selectedElement.type}</label>
          <input name="label" className="label-input" type="text" onChange={props.onChange} value={props.value} />
          {renderElementOptions(props.selectedElement.options)}
          <input className="form-selection-btn" type="submit" value="submit" />
        </form>
      </div>
    )
  }
  return '';
}

const FormSelection = (props) => {
  return (
    <div>
      <p>Form Types</p>
      {formSelectionBtn(props)}
    </div>
  );
}

export { FormSelection, RenderElementCreationForm };
