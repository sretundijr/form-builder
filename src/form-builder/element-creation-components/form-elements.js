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

const inputField = (attributesObj, changeEvent) => {
  return (
    <div>
      <label htmlFor={attributesObj.id}>{attributesObj.label}</label>
      <input
        {...attributesObj}
        onChange={changeEvent}
      />
    </div>
  )
}


export { unorderedList, inputField };
