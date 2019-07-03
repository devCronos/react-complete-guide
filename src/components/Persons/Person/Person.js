import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/WithClass'
import PropTypes from 'prop-types'

import {AuthContext} from '../../../containers/App'

//references are only available in stateful component class
class Person extends Component {
    
    constructor(props){
        super(props);
        this.inputElement = React.createRef();
        console.log(AuthContext);
    }

    componentDidMount(){
        // console.log(this);
        // if(this.props.position ===0)this.inputElement.current.focus();
    }

    focus(){
        this.inputElement.current.focus();
    }

    render(){
        return (
            <Aux>
                <AuthContext.Consumer>
                {auth => auth ? <p>I'm authenticated</p>: <p>please log in</p>}
                </AuthContext.Consumer>
                {/* {this.props.authenticated ? <p>I'm authenticated</p>: <p>please log in</p>} */}
                <p onClick={this.props.click}>I am {this.props.name} . I am {this.props.age} years old! </p>
                <p>{this.props.children}</p>
                <input 
                ref={this.inputElement}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

// export default Person;
export default withClass(Person, classes.Person);