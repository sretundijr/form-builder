import React from 'react';

// no bullets
const unorderedList = (list) => {
  if (list.length > 0) {
    return (
      <div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li key={`${item}-${index}`}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
  return '';
}

const textInput = (attributesObj, changeEvent) => {
  return (
    <div>
      <label htmlFor={attributesObj.id}>{attributesObj.label}</label>
      <input
        id={attributesObj.id}
        name={attributesObj.name}
        type="text"
        onChange={changeEvent}
        value={attributesObj.value}
        required={attributesObj.isRequired}
      />
    </div>
  )
}


export { unorderedList, textInput };
