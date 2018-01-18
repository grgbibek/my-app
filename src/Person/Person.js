import React from 'react';

const Person = (props) => {
  return (
    <div>
      <p onClick={props.click}>I'm {props.name}. My age is {props.age}.</p>
      <input type="text" onChange={props.changed} />
      <p>{props.children}</p>
    </div>
  )
};

export default Person;
