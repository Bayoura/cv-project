import React from "react";

class ContactInfo extends React.Component {
  render() {
    return (
      <section>
        <h2>Contact Information</h2>
        <div className="full-name">
          <p className="label-input-wrap">
            <label htmlFor="fName">First Name</label>
            <input
              type="text"
              name="fName"
              id="fName"
              onChange={this.props.setContactChange}
            />
          </p>
          <p className="label-input-wrap">
            <label htmlFor="lName">Last Name</label>
            <input
              type="text"
              name="lName"
              id="lName"
              onChange={this.props.setContactChange}
            />
          </p>
          <p className="label-input-wrap">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={this.props.setContactChange}
            />
          </p>
        </div>
        <p className="label-input-wrap">
          <label htmlFor="mail">E-Mail</label>
          <input
            type="text"
            name="mail"
            id="mail"
            onChange={this.props.setContactChange}
          />
        </p>
        <p className="label-input-wrap">
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={this.props.setContactChange}
          />
        </p>
      </section>
    );
  }
}

export default ContactInfo;
