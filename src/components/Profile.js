import React from "react";

function Profile({ setProfileChange }) {
  return (
    <section>
      <label htmlFor="profile">
        <h2>Personal Profile</h2>
      </label>
      <textarea
        name="profile"
        id="profile"
        onChange={setProfileChange}
      ></textarea>
    </section>
  );
}

export default Profile;
