import React, { Component } from 'react';

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

// todo submit button need a label??
const RenderLabel = (props) => {
  if (props.userSelection) {
    return (
      <div>
        <form className="element-creation-form" onSubmit={props.onSubmit}>
          <label>Please add a label for the {props.userSelection}</label>
          <input className="label-input" type="text" onChange={props.onChange} value={props.value} />
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

export { FormSelection, RenderLabel };
