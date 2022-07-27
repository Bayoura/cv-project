import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <section>
        <h2>
          <i className="fa-solid fa-briefcase"></i>Work Experience
        </h2>
        {this.props.experienceList.map((experience) => {
          return (
            <div key={experience.id}>
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
