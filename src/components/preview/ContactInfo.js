import React from "react";

class ContactInfo extends React.Component {
  render() {
    return (
      <section>
        <h2>Contact</h2>
        <div>
          <h3>
            <i className="fa-solid fa-user"></i>Name
          </h3>
          <div className="user-data">
            {this.props.userInfo.fName} {this.props.userInfo.lName}
          </div>
        </div>
        <div>
          <h3>
            <i className="fa-solid fa-house-chimney"></i>Address
          </h3>
          <div className="user-data">{this.props.userInfo.address}</div>
        </div>
        <div>
          <h3>
            <i className="fa-solid fa-at"></i>Mail
          </h3>
          <div className="user-data">{this.props.userInfo.mail}</div>
        </div>
        <div>
          <h3>
            <i className="fa-solid fa-phone"></i>Phone
          </h3>
          <div className="user-data">{this.props.userInfo.phone}</div>
        </div>
      </section>
    );
  }
}

export default ContactInfo;
