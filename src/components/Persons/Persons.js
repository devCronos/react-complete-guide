import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
    constructor(props){
        super(props);
        console.log('[Persons.js] inside constructor ',props);
        this.lastPersonRef = React.createRef();
    }
    componentWillMount(){
    console.log('[Persons.js] componentWillMount');
    }
    componentDidMount(){
        if(this.props.position ===0)this.inputElement.focus();
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps){
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps );
    }

    // PureComponent has this kind of should update implemented
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState );
    //     return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked;
    //     // return true;
    // }
    componentWillUpdate(nextProps){
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps );
    }
    componentDidUpdate(nextProps){
        console.log('[UPDATE Persons.js] Inside componentDidUpdate', nextProps );
    }


 render (){
    // console.log(this.props.isAuthenticated);
    console.log('[Persons.js] inside render');
    return this.props.persons.map((person, index) => {
        return   <Person 
        ref={this.lastPersonRef}
        // authenticated={this.props.isAuthenticated}
        position={index}
        key={index}
        name={person.name} 
        age={person.age}
        click={this.props.clicked.bind(this, index)}
        changed={(event) => this.props.changed(event, person.id)}></Person>
      });
 }
}  

export default Persons;