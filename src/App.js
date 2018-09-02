import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 20}
    ],
    otherState: 'bamboozle'
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 21}
      ]
    })
  }

  switchNameHandler = (newName) => {
    // console.log("success");
    // DONT DO THIS this.state.persons[0].name = "Maximilian";
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 21}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello im a react developer now</h1>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Maxxx!!!')} >Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Maxii!!')}
        changed={this.nameChangedHandler} >My hobbies are fishing and laying around</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} 
         />
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hello i\'m a react developer now'))  
  }
}

export default App;
