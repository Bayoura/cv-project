import React from "react";

class Preview extends React.Component {
  render() {
    return (
      <div>
        <div>First Name: {this.props.fName}</div>
        <div>Last Name: {this.props.lName}</div>
        <div>Mail: {this.props.mail}</div>
        <div>Phone: {this.props.phone}</div>
      </div>
    );
  }
}

export default Preview;
