import React from 'react';

import '../styles/form-elements.css';

// no bullets
const unorderedList = (list) => {
  if (list.length > 0) {
    return (
      <div className="options-list-container">
        <ul>
          {
            list.map((item, index) => {
              return (
                <li className="options-list" key={`${item.value}-${index}`}>{item.value}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
  return '';
}

const inputField = (attributesObj, changeEvent) => {
  const isCheckBox = (attributesObj.type === 'checkbox' || attributesObj.type === 'radio');
  const inputContainer = isCheckBox ? 'check-box-container' : 'text-input-container';
  const inputLabel = isCheckBox ? 'check-box-label' : 'text-input-label';
  const input = isCheckBox ? 'check-box-input' : 'text-input';

  return (
    <div
      className={`${inputContainer} input-container`}
    >
      <label
        htmlFor={attributesObj.id}
        className={inputLabel}
      >{attributesObj.label}
      </label>
      <input
        {...attributesObj}
        onChange={changeEvent}
        className={input}
      />
    </div>
  )
}

const radioInputHeader = (label) => <p className="radio-input-header" >{label}</p>

const dropDownList = (formObj) => {
  return (
    <div className="drop-down-container" >
      <label className="drop-down-label" >{formObj.label}:</label>
      <select className="option-container" >
        {
          formObj.options.map((item, index) => {
            return (
              <option key={`drop-down-options-${index}`} value={item.value}>{item.value}</option>
            )
          })
        }
      </select>
    </div>
  )
}

const formHeader = (formObj) => {
  return <h2 className="form-header" >{formObj.label}</h2>
}

const submitInput = (value) => {
  return (
    <div className="form-submit-container" >
      <input
        className="form-submit-btn"
        type="submit"
        value={value}
      />
    </div>
  )
}


export {
  unorderedList,
  inputField,
  radioInputHeader,
  dropDownList,
  formHeader,
  submitInput,
};
