import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {

  state = {
    persons: [
      {id: "1", name: 'Max', age: 28},
      {id: "2", name: 'Manu', age: 29},
      {id: "3", name: 'Stephanie', age: 20}
    ],
    otherState: 'bamboozle'
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons} );

  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    let btnClass = '';
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return   <Person 
            name={person.name} 
            age={person.age}
            click={this.deletePersonHandler.bind(this, index)}
            
            changed={(event) => this.nameChangedHandler(event, person.id)}></Person>
            
          })}
            
          </div> 
      );
      
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    
    return (
      <div className={classes.App}>
        <h1>Hello im a react developer now</h1>
        <p className={assignedClasses.join(' ')}>This is a funny paragraph</p>
        <button 
        className={btnClass}
        onClick={this.togglePersonsHandler} >Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hello i\'m a react developer now'))  
  }
}


// higher order component
export default App;
