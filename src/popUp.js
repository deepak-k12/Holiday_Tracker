import React, { Component } from "react";

import './Style.css';

class PopUp extends Component {
    render() {
      return (
        <div className='popup'>
          <div className='popupInner'>
            <h1>{this.props.text}</h1>
            <h3>Title : {this.props.title}</h3>
            <h3>Date : {this.props.date}</h3>
            <h3>Notes : {this.props.notes}</h3>
            <center><button onClick={this.props.closePopup}>Close</button></center>
          </div>
        </div>
      );
    }
  }

  export default PopUp;