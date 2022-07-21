import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <section>
        {this.props.experienceList.map((experience) => {
          return (
            <div key={experience.id}>
              <h2>Work Experience</h2>
              <div>Company: {experience.company}</div>
              <div>Position: {experience.position}</div>
              <div>Tasks: {experience.tasks}</div>
              <div>City: {experience.expCity}</div>
              <div>From: {experience.expFrom}</div>
              <div>To: {experience.expTo}</div>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Experience;
