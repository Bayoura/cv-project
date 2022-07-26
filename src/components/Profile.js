import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <section>
        <p>
          <label htmlFor="profile">Personal Profile</label>
        </p>
        <textarea
          name="profile"
          id="profile"
          onChange={this.props.setProfileChange}
        ></textarea>
      </section>
    );
  }
}

export default Profile;
