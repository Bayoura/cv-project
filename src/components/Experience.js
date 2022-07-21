import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <div className="sectionDiv">
        <p>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            onChange={this.props.handleExperienceChange}
          />
        </p>
        <p>
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            id="position"
            onChange={this.props.handleExperienceChange}
          />
        </p>
        <p>
          <label htmlFor="tasks">Main tasks</label>
          <input
            type="text"
            name="tasks"
            id="tasks"
            onChange={this.props.handleExperienceChange}
          />
        </p>
        <p>
          <label htmlFor="expCity">City</label>
          <input
            type="text"
            name="expCity"
            id="expCity"
            onChange={this.props.handleExperienceChange}
          />
        </p>
        <div className="date">
          <p>
            <label htmlFor="expFrom">From</label>
            <input
              type="date"
              name="expFrom"
              id="expFrom"
              onChange={this.props.handleExperienceChange}
            />
          </p>
          <p>
            <label htmlFor="expTo">To</label>
            <input
              type="date"
              name="expTo"
              id="expTo"
              onChange={this.props.handleExperienceChange}
            />
          </p>
        </div>
      </div>
    );
  }
}

export default Experience;
