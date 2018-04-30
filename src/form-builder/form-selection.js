import React from 'react';

import './styles/form-selection.css';

const formSelectionBtn = (props) => {
  return props.list.map(item =>
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
    <div className="element-selection-container" >
      {formSelectionBtn(props)}
    </div>
  );
}

export { FormSelection };
