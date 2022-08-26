import React, { Component } from 'react'
import sub from './sub.png';
import unsub from './unsub.png';
class NewComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Subscribe to AKK Technologies",
       text: "Subscribe",
       imageUrl:unsub
    }
  }
  styles = {
    fontStyle:"italic",
    color:"purple"
  };
  btnstyles = {
    fontStyle:"italic",
    color:"white",
    backgroundColor:"red",
    fontWeight:"bold",
    border:"none",
    cursor:"pointer",
    padding:"10px"
  };
  updateBtn = () => {
    this.setState({
      message:"Hit the bell icon to never miss an update!",
      text:"Subscribed"
    });
  };
  updateImg = () => {
    this.setState({
      message : "Thank You! Happy Learning!",
      imageUrl:sub
    });
  }
  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button style={this.btnstyles} onClick={this.updateBtn}>{this.state.text}</button>
        <p />
        <img onClick={this.updateImg} style={{height:"50px",width:"50px"}} src={this.state.imageUrl} alt />
      </div>

    )
  }
}

export default NewComp