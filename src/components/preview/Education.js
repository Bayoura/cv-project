import React from "react";

class Education extends React.Component {
  render() {
    return (
      <section>
        <h2>Education</h2>
        {this.props.educationList.map((education) => {
          return (
            <div key={education.id}>
              <div>University: {education.facility}</div>
              <div>City: {education.edCity}</div>
              <div>Degree: {education.degree}</div>
              <div>From: {education.edFrom}</div>
              <div>To: {education.edTo}</div>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Education;
