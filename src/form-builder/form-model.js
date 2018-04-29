import React from 'react';

// todo add name fields and other html properties
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
// todo implement radio input
// todo refactor label element
const formTagList = (formObj = '') => {
  return [
    {
      type: 'Text Input',
      options: false,
      element: (formObj) => {
        return (
          <div>
            <label>{formObj.label}</label>
            <input type="text" name={formObj.label} />
          </div>
        )
      },
    },
    {
      type: 'Submit',
      options: false,
      element: (formObj) => <button>Submit</button>,
    },
    {
      type: 'Radio List',
      options: true,
      element: (formObj) => {
        return (
          <div>
            <label>{formObj.label}</label>
            <input type="radio" value={formObj.elementOptions[0]} />
          </div>
        )
      },
    },
    {
      type: 'Drop Down List',
      options: true,
      element: (formObj) => {
        return (
          <div>
            <label>{formObj.label}:</label>
            <select name="">
              {
                formObj.elementOptions.map((item, index) => {
                  return (
                    <option key={`drop-down-options-${index}`} value={item}>{item}</option>
                  )
                })
              }
            </select>
          </div>
        )
      },
    },
  ]
}

const getAllFormTypes = () => {
  return formTagList().map(item => item.type);
}

export { getAllFormTypes, formTagList };
