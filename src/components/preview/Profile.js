import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <section>
        <h1>
          {this.props.name.fName} {this.props.name.lName}
        </h1>
        <div>{this.props.profile}</div>
      </section>
    );
  }
}

export default Profile;
