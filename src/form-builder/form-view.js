import React from 'react';

// todo refactor condtional
// todo change label
const renderElementList = (list) => {
  // console.log(list);
  if (list.length > 0) {
    return list.map((item, index) => {
      return (
        <div key={`${item.label}-${index}`}>
          <p>{item.label}</p>
          {/* todo find a better way */}
          {item.selectedElement.element(item)}
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
