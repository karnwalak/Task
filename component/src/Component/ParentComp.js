import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Akshay Kumar Karnwal"
    };
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        name: "Akshay Kumar Karnwal"
      });
    }, 3000);
  }

  render() {
    console.log("Parent Component Render");
    return (
      <div>It Is A Parent Component!
       <RegComp name={this.state.name} />
       <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp