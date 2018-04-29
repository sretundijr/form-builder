import React from 'react';

import { getAllFormTypes } from './form-model';

import './styles/form-selection.css';

// todo rename file and function names
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

const FormSelection = (props) => {
  return (
    <div>
      <p>Form Types</p>
      {formSelectionBtn(props)}
    </div>
  );
}

export { FormSelection };
