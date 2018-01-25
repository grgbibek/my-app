import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id: '1', name: "bibek", age: 24},
      {id: '2', name: "Amir", age: 28},
      {id: '3', name: "Dhiraj", age: 28}
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => {
    //console.log("Clicked!");
    this.setState ({
      persons : [
      {name: newName, age: 30},
      {name: "Amir", age: 444},
      {name: "Dhiraj", age: 33}
    ]
  })
  };

  nameChangedHandler = (event, id) => {
    console.log("Id" + id);

    //checking id of every object
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    console.log("Person Index : " + personIndex );

    const person ={
      ...this.state.persons[personIndex]
    };  //copying the property/object of class person with the respective index

    console.log(("Person" + person));
    person.name = event.target.value; //changing the name value to name

    const persons = [...this.state.persons]; //mutating the class persons
    persons[personIndex] = person; //updating an object into the class array

    console.log( "Persons" + persons);
    //updating the persons array by new array which consist of updated name  
    this.setState ({
      persons : persons
    })
  };

  deletePersonHandler = (personIndex) =>{
    const persons = this.state.persons; //refering the persons array (passing pointer to another variable)
    persons.splice(personIndex, 1); //to remove an element from the array (persons)
    this.setState({persons: persons})
  };

  toggleNameHandler = () => {
    //here we are changing the value of showPerson to
    // the opposite value  so that if the value is true
    // change it to false and vice versa.
    const doesShow = this.state.showPersons;
    this.setState ({showPersons: !doesShow});
  };

  render() {
    //creating inline css for button
    const styleButton = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let person= null;

    if (this.state.showPersons){
      person = (
        <div>
          {this.state.persons.map((person,index) => {
              return <Person click={() => this.deletePersonHandler(index)}
                              name={person.name}
                              age={person.age}
                              key={person.id}
                              changed={(event) => this.nameChangedHandler(event,person.id)} />
            })
          }
        </div>
      );
    }

    return (

      <div className="App">
        <h1>Hi ! I am a React Developer</h1>
        <button style= {styleButton} onClick={this.toggleNameHandler} >Toggle Persons</button>
        {person}
      </div>
    );
  }
}

export default App;
