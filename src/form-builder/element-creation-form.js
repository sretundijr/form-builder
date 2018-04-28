import React from 'react';

const renderElementOptions = (options) => {
  if (options) {
    return (
      <div>
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

export { RenderElementCreationForm }

