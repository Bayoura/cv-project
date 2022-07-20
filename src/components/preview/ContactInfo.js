import React from "react";

class ContactInfo extends React.Component {
  render() {
    return (
      <section>
        <h2>Contact Information</h2>
        <div>First Name: {this.props.userInfo.fName}</div>
        <div>Last Name: {this.props.userInfo.lName}</div>
        <div>Mail: {this.props.userInfo.mail}</div>
        <div>Phone: {this.props.userInfo.phone}</div>
      </section>
    );
  }
}

export default ContactInfo;
