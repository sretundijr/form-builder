import React, { Component } from 'react';

const formTagList = (formObj = '') => {
  return [
    {
      type: 'Text Input',
      label: formObj.label,
      element: () => <input />,
    },
    {
      type: 'Submit',
      label: formObj.label,
      element: () => <button>Submit</button>,
    },
    {
      type: 'Radio List',
      label: formObj.label,
      element: () => <input type="radio" value="" />,
    },
    {
      type: 'Drop Down List',
      label: formObj.label,
      element: (optionsList) => <select>{optionsList.map(item => item)}</select>,
    },
  ]
}

export function getAllFormTypes() {
  return formTagList().map(item => item.type);
}


