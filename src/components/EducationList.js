import React from "react";
import Education from "./Education";

class EducationList extends React.Component {
  render() {
    // the remove button only appears if there is more than one education item
    let check = this.props.educationList.length >= 2 ? true : false;
    let button;
    if (check) {
      button = (
        <button
          className="remove-btn"
          title="Remove the last section"
          type="button"
          onClick={this.props.removeEducation}
        >
          Remove
        </button>
      );
    } else {
      button = <></>;
    }
    return (
      <section className="education-input-section">
        <h2>Education</h2>
        {this.props.educationList.map((education, index) => {
          return (
            <Education
              key={education.id}
              index={index}
              education={education}
              setEducationChange={this.props.setEducationChange}
            />
          );
        })}
        <div className="button-wrap">
          <button
            title="Add another education section"
            type="button"
            onClick={this.props.addEducation}
          >
            +
          </button>
          {button}
        </div>
      </section>
    );
  }
}

export default EducationList;
