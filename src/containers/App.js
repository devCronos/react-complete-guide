import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux'
import withClass from '../hoc/WithClass'
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] inside constructor ',props);
    this.state = {
      persons: [
        {id: "1", name: 'Max', age: 28},
        {id: "2", name: 'Manu', age: 29},
        {id: "3", name: 'Stephanie', age: 20}
      ],
      otherState: 'bamboozle',
      toggleCounter: 0,
      authenticated: false
    };

  }
  componentWillMount(){
    console.log('[App.js] componentWillMount');
  }
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  //PureComponent has implemented this
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState );
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps){
      console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps );
  }
  
  

  static getDerivedStateFromProps(nextProps, prevState){
    // if component needs to bring state and props in sync
    // do something with the props and return a new state {}
    return prevState;
  }

  getSnapshotBeforeUpdate(){
    // for example save the scrolling position
  }
  componentDidUpdate(nextProps){
    console.log('[UPDATE App.js] Inside componentDidUpdate', nextProps );
  }

  // state = {
  //   persons: [
  //     {id: "1", name: 'Max', age: 28},
  //     {id: "2", name: 'Manu', age: 29},
  //     {id: "3", name: 'Stephanie', age: 20}
  //   ],
  //   otherState: 'bamboozle'
  // }

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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleCounter: prevState.toggleCounter+1
        }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
    // console.log(this.state.authenticated);
  }

  render( ) {
    console.log('[App.js] inside render');
    let persons = null;
    
    if(this.state.showPersons){
      persons = (
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          // isAuthenticated={this.state.authenticated}
          />
      );
      
      
    }
    
    return (
      <Aux>
        <button onClick={()=>{ this.setState({ showPersons:true }) }} >Show Persons</button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
        {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hello i\'m a react developer now'))  
  }
}


// higher order component
export default withClass(App, classes.App);
