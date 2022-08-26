import React, { Component } from 'react'
import UpdateComp from "./HigherOrder";
export class Click extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    };
  }
  updateClick = () => {
    this.setState({count:this.state.count+1});
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.updateClick}>{this.props.name} Clicked {count} Times</button>
      </div>
    )
  }
}

export default UpdateComp(Click);