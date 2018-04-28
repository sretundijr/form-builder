import React from 'react';

// todo refactor condtional
const renderElementList = (list) => {
  if (list.length > 0) {
    return list.map((item) => {
      // todo add key
      return (
        <div>
          <p>{item.label}</p>
          <p>{item.selectedElement.type}</p>
        </div>
      );
    })
  }
  return '';
}

const FormView = (props) => {
  return (
    <div>
      {renderElementList(props.elementList)}
    </div>
  )
}

export { FormView };
