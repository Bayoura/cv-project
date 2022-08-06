import React from "react";

function Profile({ profile, userInfo }) {
  return (
    <section>
      <h1>
        {userInfo.fName} {userInfo.lName}
      </h1>
      <div>{profile}</div>
    </section>
  );
}

export default Profile;
