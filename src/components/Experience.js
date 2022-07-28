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
      <div className="section-div">
        <p className="label-input-wrap">
          <label htmlFor={`position-${this.props.index}`}>Position</label>
          <input
            type="text"
            name="position"
            id={`position-${this.props.index}`}
            onChange={this.handleExperienceChange}
          />
        </p>
        <p className="label-input-wrap">
          <label htmlFor={`company-${this.props.index}`}>Company</label>
          <input
            type="text"
            name="company"
            id={`company-${this.props.index}`}
            onChange={this.handleExperienceChange}
          />
        </p>
        <p className="label-input-wrap">
          <label htmlFor={`expCity-${this.props.index}`}>City</label>
          <input
            type="text"
            name="expCity"
            id={`expCity-${this.props.index}`}
            onChange={this.handleExperienceChange}
          />
        </p>
        <p className="label-input-wrap">
          <label htmlFor={`tasks-${this.props.index}`}>Main tasks</label>
          <input
            type="text"
            name="tasks"
            id={`tasks-${this.props.index}`}
            onChange={this.handleExperienceChange}
          />
        </p>
        <div className="date label-input-wrap">
          <p>
            <label htmlFor={`expFrom-${this.props.index}`}>From</label>
            <input
              type="text"
              name="expFrom"
              placeholder="2012"
              id={`expFrom-${this.props.index}`}
              onChange={this.handleExperienceChange}
            />
          </p>
          <p>
            <label htmlFor={`expTo-${this.props.index}`}>To</label>
            <input
              type="text"
              name="expTo"
              placeholder="2012"
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
