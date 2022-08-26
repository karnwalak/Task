import React, { Component } from 'react';

class RegComp extends Component {
  render() {
    console.log("Regular Component Render");
    return <div>It Is A Regular Component {this.props.name} !</div>
  }
}

export default RegComp