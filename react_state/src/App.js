import React from "react";
import './App.css';
import NewComp from "./Component/NewComp";

class App extends React.Component{
  styles = {
    fontStyle: "bold",
    color: "teal"
  };
  render(){
    return <div className="App">
      <h2 style={this.styles}>Welcome!</h2>
      <NewComp />
    </div>
  }
}

export default App;
