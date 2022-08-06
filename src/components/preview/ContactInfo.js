import React from "react";

function ContactInfo({ userInfo }) {
  return (
    <section>
      <h2>Contact</h2>
      <div>
        <h3>
          <i className="fa-solid fa-user"></i>Name
        </h3>
        <div className="user-data">
          {userInfo.fName} {userInfo.lName}
        </div>
      </div>
      <div>
        <h3>
          <i className="fa-solid fa-house-chimney"></i>Address
        </h3>
        <div className="user-data">{userInfo.address}</div>
      </div>
      <div>
        <h3>
          <i className="fa-solid fa-at"></i>Mail
        </h3>
        <div className="user-data">{userInfo.mail}</div>
      </div>
      <div>
        <h3>
          <i className="fa-solid fa-phone"></i>Phone
        </h3>
        <div className="user-data">{userInfo.phone}</div>
      </div>
    </section>
  );
}

export default ContactInfo;
