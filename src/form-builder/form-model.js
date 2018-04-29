import React, { Component } from 'react';

const formTagList = (formObj = '') => {
  return [
    {
      type: 'Text Input',
      options: false,
      element: (formObj) => <input type="text" name={formObj.label} />,
    },
    {
      type: 'Submit',
      options: false,
      element: (formObj) => <button>Submit</button>,
    },
    {
      type: 'Radio List',
      options: true,
      element: (formObj) => <input type="radio" value="" />,
    },
    {
      type: 'Drop Down List',
      options: true,
      element: (formObj) => {
        return (<select>{formObj.elementOptions.map(item => <option>{item}</option>)}</select>)
      },
    },
  ]
}

const getAllFormTypes = () => {
  return formTagList().map(item => item.type);
}

export { getAllFormTypes, formTagList };
