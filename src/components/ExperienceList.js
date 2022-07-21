import React from "react";
import Experience from "./Experience";

class ExperienceList extends React.Component {
  render() {
    // the remove button only appears if there is more than one experience item
    let check = this.props.experienceList.length >= 2 ? true : false;
    let button;
    if (check) {
      button = (
        <button
          title="Remove the last section"
          type="button"
          onClick={this.props.removeExperience}
        >
          Remove
        </button>
      );
    } else {
      button = <></>;
    }

    return (
      <section>
        <h2>Work Experience</h2>
        {this.props.experienceList.map((experience) => {
          return (
            <Experience
              key={experience.id}
              experience={experience}
              handleExperienceChange={this.props.handleExperienceChange}
              addExperience={this.props.addExperience}
            />
          );
        })}
        <button
          title="Add another experience section"
          type="button"
          onClick={this.props.addExperience}
        >
          +
        </button>
        {button}
      </section>
    );
  }
}

export default ExperienceList;
