import React from "react";

class Education extends React.Component {
  constructor() {
    super();
    this.handleEducationChange = this.handleEducationChange.bind(this);
  }

  handleEducationChange(e) {
    this.props.setEducationChange(this.props.education.id, e.target);
  }

  render() {
    return (
      <div className="sectionDiv">
        <p>
          <label htmlFor={`facility-${this.props.index}`}>
            School/University
          </label>
          <input
            type="text"
            name="facility"
            id={`facility-${this.props.index}`}
            onChange={this.handleEducationChange}
          />
        </p>
        <p>
          <label htmlFor={`edCity-${this.props.index}`}>City</label>
          <input
            type="text"
            name="edCity"
            id={`edCity-${this.props.index}`}
            onChange={this.handleEducationChange}
          />
        </p>
        <p>
          <label htmlFor={`degree-${this.props.index}`}>Degree</label>
          <input
            type="text"
            name="degree"
            id={`degree-${this.props.index}`}
            onChange={this.handleEducationChange}
          />
        </p>
        <div className="date">
          <p>
            <label htmlFor={`edFrom-${this.props.index}`}>From</label>
            <input
              type="date"
              name="edFrom"
              id={`edFrom-${this.props.index}`}
              onChange={this.handleEducationChange}
            />
          </p>
          <p>
            <label htmlFor={`edTo-${this.props.index}`}>To</label>
            <input
              type="date"
              name="edTo"
              id={`edTo-${this.props.index}`}
              onChange={this.handleEducationChange}
            />
          </p>
        </div>
      </div>
    );
  }
}

export default Education;
