import React from 'react';

import { inputField, radioInputHeader, dropDownList, formHeader } from './element-creation-components/form-elements';

// elements can be added here.  the element method gets called from form-view
// the formObj is created in element-creation-form and passed up to form-builder
const formTagList = () => {
  return [
    {
      name: 'Header',
      options: false,
      element: (formObj) => formHeader(formObj),
    },
    {
      name: 'Text Input',
      options: false,
      element: (formObj) => {
        formObj.type = 'text';
        return inputField(formObj, () => { })
      }
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
        return dropDownList(formObj)
      },
    },
    {
      name: 'Submit',
      options: false,
      element: (formObj) => <button>Submit</button>,
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
