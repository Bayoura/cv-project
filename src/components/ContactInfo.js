import React from "react";

class ContactInfo extends React.Component {
  render() {
    return (
      <section>
        <h2>Contact Information</h2>
        <div className="fullName">
          <p>
            <label htmlFor="fName">First Name</label>
            <input
              type="text"
              name="fName"
              id="fName"
              onChange={this.props.handlePersonalChange}
            />
          </p>
          <p>
            <label htmlFor="lName">Last Name</label>
            <input
              type="text"
              name="lName"
              id="lName"
              onChange={this.props.handlePersonalChange}
            />
          </p>
        </div>
        <p>
          <label htmlFor="mail">E-Mail</label>
          <input
            type="email"
            name="mail"
            id="mail"
            onChange={this.props.handlePersonalChange}
          />
        </p>
        <p>
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            onChange={this.props.handlePersonalChange}
          />
        </p>
      </section>
    );
  }
}

export default ContactInfo;
