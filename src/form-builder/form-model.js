import React, { Component } from 'react';

const formTagList = () => {
  return [
    {
      type: 'input',
      element: <input />
    },
    {
      type: 'submit',
      element: <button>Submit</button>,
    }
  ]
}

export function getAllFormTypes() {
  return formTagList().map(item => item.type);
}


