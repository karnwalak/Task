import React, { Component } from 'react'

class PureComp extends Component {
  render() {
    console.log("Pure Component Render");
    return <div>It Is A Pure Component {this.props.name} !</div>
  }
}

export default PureComp