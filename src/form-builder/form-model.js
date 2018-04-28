import React, { Component } from 'react';

const formTagList = (formObj = '') => {
  return [
    {
      type: 'Text Input',
      options: false,

      // label: formObj.label,
      // element: () => <input />,
    },
    {
      type: 'Submit',
      options: false,

      // label: formObj.label,
      // element: () => <button>Submit</button>,
    },
    {
      type: 'Radio List',
      options: true,
      // label: formObj.label,
      // element: () => <input type="radio" value="" />,
    },
    {
      type: 'Drop Down List',
      options: true,
      // label: formObj.label,
      // element: (optionsList) => <select>{optionsList.map(item => item)}</select>,
    },
  ]
}



const getAllFormTypes = () => {
  return formTagList().map(item => item.type);
}

export { getAllFormTypes, formTagList };
