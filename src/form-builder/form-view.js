import React from 'react';

import './styles/form-view.css';

// todo fix key warning
const renderElementList = (list) => {
  if (list.length > 0) {
    return list.map((item, index) => {
      const formObj = { ...item };
      const getElement = item.element;
      delete formObj['element'];
      return (
        <div key={`${item.label}-${index}`}>
          {getElement(formObj)}
        </div>
      );
    })
  }
  return '';
}

const FormView = (props) => {
  console.log(props);
  return (
    <div>
      <h3 className="form-view-header" >Form preview</h3>
      {renderElementList(props.elementList)}
    </div>
  )
}

export { FormView };
