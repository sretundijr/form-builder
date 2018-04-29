import React from 'react';

// todo add name fields and other html properties
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
// todo add for to label, attribute should match the id of the corresponding form element
// todo add id's for all form elements ^^^
// todo textarea needs rows and cols
// todo see data list http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/html/html_form_elements.asp.html
// 
// elements can be added here.  the element method gets called from form-view
// the formObj is created in element-creation-form and passed up to form-builder
const formTagList = () => {
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
            <p>{formObj.label}</p>
            {
              formObj.elementOptions.map((item, index) => {
                return (
                  <div key={`radio-element-${index}`}>
                    <input type="radio" value={item} />
                    <label>{item}</label>
                  </div>
                )
              })
            }
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
