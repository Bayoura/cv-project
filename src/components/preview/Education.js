import React from "react";

class Education extends React.Component {
  render() {
    return (
      <section>
        <h2>
          <i className="fa-solid fa-graduation-cap"></i>Education
        </h2>
        {this.props.educationList.map((education) => {
          return (
            <div key={education.id} className="education-wrap">
              <div>{`${education.edFrom} - ${education.edTo}`}</div>
              <div>
                <div className="subject">{education.subject}</div>
                <div>
                  {education.facility}, <span>{education.edCity}</span>
                </div>
                <div>{education.degree}</div>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Education;
