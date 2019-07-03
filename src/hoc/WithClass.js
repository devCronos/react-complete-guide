import React, {Component} from 'react'

//statefull component class
const withClass = (WrappedComponent, className) => {
    const WithClass =  class extends Component {
        render(){
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>
            )
        }
    }

    return React.forwardRef((props,ref) => {
        return <WithClass {...props} forwardedRef={ref} />
    })
}

//stateless component function
// const withClass = (WrappedComponent, className) => {
// return (props) => (
//     <div className={className}>
//         <WrappedComponent {...props} />
//     </div>
// )}


export default withClass;