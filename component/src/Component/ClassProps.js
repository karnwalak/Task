import React, { Component } from 'react'

class ClassProps extends Component {
  render() {
    return (
      <div>Hello I am {this.props.name} My Qualification is {this.props.class}
      {this.props.children}
      </div>
    )
  }
}

export default ClassProps