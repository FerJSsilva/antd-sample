import React from 'react';

const TodoItems = props => (
  <ul>
    {
      props.items.map((item, index) => <li onClick={() => {props.removeItem(item)}} key={index}>{item}</li>)
    }
  </ul>
);

export default TodoItems;