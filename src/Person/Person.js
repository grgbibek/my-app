import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
<<<<<<< HEAD
    <div className="Person">
      <p onClick={props.click}>I'm {props.name}. My age is {props.age}.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
=======
    <div>
      <p onClick={props.click}>I'm {props.name}. My age is {props.age}.</p>
      <input type="text" onChange={props.changed} />
>>>>>>> f2aa54c7f8549ab9c02ae079cb2a4c4318a9030b
      <p>{props.children}</p>
    </div>
  )
};

export default Person;
