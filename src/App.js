import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person />
        <h1>Hi ! I am a React Developer</h1>
        <Person />
      </div>
    );
  }
}

export default App;
