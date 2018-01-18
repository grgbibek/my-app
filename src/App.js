import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person : [
      {name: "bibek", age: 24},
      {name: "Amir", age: 28},
      {name: "Dhiraj", age: 28}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log("Clicked!");
    this.setState ({
      person : [
      {name: newName, age: 30},
      {name: "Amir", age: 444},
      {name: "Dhiraj", age: 33}
    ]
  })
  }

  nameChangedHandler = (event) => {
    this.setState ({
      person : [
      {name: "Hitman", age: 30},
      {name: event.target.value, age: 444},
      {name: "Dhiraj", age: 33}
    ]
  })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi ! I am a React Developer</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Maximillian')}>Click me</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person click={this.switchNameHandler.bind(this, 'Max')}
          changed={this.nameChangedHandler} name={this.state.person[1].name} age={this.state.person[1].age} />
        <Person name={this.state.person[2].name} age={this.state.person[2].age} >My Hobbies are programming</Person>
      </div>
    );
  }
}

export default App;
