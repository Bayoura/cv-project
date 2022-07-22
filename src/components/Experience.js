import React from "react";

class Experience extends React.Component {
  constructor() {
    super();
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
  }

  handleExperienceChange(e) {
    this.props.setExperienceChange(this.props.experience.id, e.target);
  }

  render() {
    return (
      <div className="sectionDiv">
        <p>
          <label htmlFor={`company-${this.props.index}`}>Company</label>
          <input
            type="text"
            name="company"
            id={`company-${this.props.index}`}
            onChange={this.handleExperienceChange}
          />
        </p>
        <p>
          <label htmlFor={`position-${this.props.index}`}>Position</label>
          <input
            type="text"
            name="position"
            id={`position-${this.props.index}`}
            onChange={this.handleExperienceChange}
          />
        </p>
        <p>
          <label htmlFor={`tasks-${this.props.index}`}>Main tasks</label>
          <input
            type="text"
            name="tasks"
            id={`tasks-${this.props.index}`}
            onChange={this.handleExperienceChange}
          />
        </p>
        <p>
          <label htmlFor={`expCity-${this.props.index}`}>City</label>
          <input
            type="text"
            name="expCity"
            id={`expCity-${this.props.index}`}
            onChange={this.handleExperienceChange}
          />
        </p>
        <div className="date">
          <p>
            <label htmlFor={`expFrom-${this.props.index}`}>From</label>
            <input
              type="date"
              name="expFrom"
              id={`expFrom-${this.props.index}`}
              onChange={this.handleExperienceChange}
            />
          </p>
          <p>
            <label htmlFor={`expTo-${this.props.index}`}>To</label>
            <input
              type="date"
              name="expTo"
              id={`expTo-${this.props.index}`}
              onChange={this.handleExperienceChange}
            />
          </p>
        </div>
      </div>
    );
  }
}

export default Experience;
