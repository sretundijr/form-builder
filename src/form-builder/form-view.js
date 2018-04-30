import React from 'react';

const renderElementList = (list) => {
  if (list.length > 0) {
    return list.map((item, index) => {
      const formObj = item;
      const getElement = item.element;
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
      {renderElementList(props.elementList)}
    </div>
  )
}

export { FormView };
