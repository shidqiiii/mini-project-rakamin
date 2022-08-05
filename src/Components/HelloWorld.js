import React, { Component } from 'react'

// Class Component
class HelloWorld extends Component {
    render() {
        return (
            <>
                <h1>Hello {this.props.name}</h1>
            </>
        )
    }
}

// Functional Component
// function HelloWorld(props) {
//     return (
//         <h1>Hello {props.name}</h1>
//     )
// }



export default HelloWorld