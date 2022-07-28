import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="profile">
          <h2>Personal Profile</h2>
        </label>
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
