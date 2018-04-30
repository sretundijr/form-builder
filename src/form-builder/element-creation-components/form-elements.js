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
                <li className="options-list" key={`${item}-${index}`}>{item}</li>
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
  const isCheckBox = (attributesObj.type === 'checkbox');
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

// const inputWithBtn = () => {
//   return (
//     <div>
//       {inputField(inputAttributes, this.handleOptionsChangeEvent)}
//       <button type="button" onClick={this.addOption}>Add</button>
//     </div>
//   )
// }


export { unorderedList, inputField };
