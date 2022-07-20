import React from "react";

class Education extends React.Component {
  render() {
    return (
      <section>
        <h2>Education</h2>
        <div>University: {this.props.education.facility}</div>
        <div>City: {this.props.education.edCity}</div>
        <div>Degree: {this.props.education.degree}</div>
        <div>From: {this.props.education.edFrom}</div>
        <div>To: {this.props.education.edTo}</div>
      </section>
    );
  }
}

export default Education;
