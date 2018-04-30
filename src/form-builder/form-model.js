import React from 'react';

import { inputField, radioInputHeader } from './element-creation-components/form-elements';

// elements can be added here.  the element method gets called from form-view
// the formObj is created in element-creation-form and passed up to form-builder
const formTagList = () => {
  return [
    {
      // todo add type to formObj
      name: 'Text Input',
      options: false,
      element: (formObj) => inputField(formObj, () => { })
    },
    {
      name: 'Submit',
      options: false,
      element: (formObj) => <button>Submit</button>,
    },
    {
      name: 'Radio Button',
      options: true,
      element: (formObj) => {
        const radioList = formObj.options.map((item) => {
          const attributeObj = {
            type: 'radio',
            required: formObj.requiredField,
            label: item.value,
          }
          return inputField(attributeObj, () => { })
        })
        return (
          <div>
            {radioInputHeader(formObj.label)}
            {radioList}
          </div>
        )
      }
    },
    {
      name: 'Drop Down List',
      options: true,
      element: (formObj) => {
        return (
          <div>
            <label>{formObj.label}:</label>
            <select name="">
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
      },
    },
  ]
}

const getAllFormTypes = () => {
  return formTagList().map(item => item.name);
}

const filterByName = (name) => {
  return formTagList().filter(item => item.name === name);
}

export { getAllFormTypes, formTagList, filterByName };
