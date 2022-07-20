import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <section>
        <h2>Work Experience</h2>
        <div>Company: {this.props.experience.company}</div>
        <div>Position: {this.props.experience.position}</div>
        <div>Tasks: {this.props.experience.tasks}</div>
        <div>City: {this.props.experience.expCity}</div>
        <div>From: {this.props.experience.expFrom}</div>
        <div>To: {this.props.experience.expTo}</div>
      </section>
    );
  }
}

export default Experience;
