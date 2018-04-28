import React, { Component } from 'react';

import { getAllFormTypes } from './form-model';

const formSelectionBtn = (props) => {
  return getAllFormTypes().map(item =>
    <button
      onClick={props.onClick}
      key={item}
      value={item}
    >
      {item}
    </button>
  )
}

const RenderLabel = (props) => {
  if (props.userSelection) {
    return (
      <div>
        <p>Please add a label for this form input</p>
        <input onChange={props.onChange} />
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
      {/* {renderLabel(props)} */}
    </div>
  );
}

export { FormSelection, RenderLabel };
