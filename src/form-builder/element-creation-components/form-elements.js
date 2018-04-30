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

// todo style this
const radioInputHeader = (label) => <p>{label}</p>


export { unorderedList, inputField, radioInputHeader };
