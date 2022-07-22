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
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            id={`company-${this.props.index}`}
            onChange={this.handleExperienceChange}
          />
        </p>
        <p>
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            id={`position-${this.props.index}`}
            onChange={this.handleExperienceChange}
          />
        </p>
        <p>
          <label htmlFor="tasks">Main tasks</label>
          <input
            type="text"
            name="tasks"
            id={`tasks-${this.props.index}`}
            onChange={this.handleExperienceChange}
          />
        </p>
        <p>
          <label htmlFor="expCity">City</label>
          <input
            type="text"
            name="expCity"
            id={`expCity-${this.props.index}`}
            onChange={this.handleExperienceChange}
          />
        </p>
        <div className="date">
          <p>
            <label htmlFor="expFrom">From</label>
            <input
              type="date"
              name="expFrom"
              id={`expFrom-${this.props.index}`}
              onChange={this.handleExperienceChange}
            />
          </p>
          <p>
            <label htmlFor="expTo">To</label>
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
