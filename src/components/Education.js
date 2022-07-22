import React from "react";

class Education extends React.Component {
  constructor() {
    super();
    this.handleEducationChange = this.handleEducationChange.bind(this);
  }

  handleEducationChange(e) {
    this.props.setEducationChange(this.props.eduaction.id, e.target);
  }

  render() {
    return (
      <div className="sectionDiv">
        <p>
          <label htmlFor="facility">School/University</label>
          <input
            type="text"
            name="facility"
            id={`facility-${this.props.index}`}
            onChange={this.handleEducationChange}
          />
        </p>
        <p>
          <label htmlFor="edCity">City</label>
          <input
            type="text"
            name="edCity"
            id={`edCity-${this.props.index}`}
            onChange={this.handleEducationChange}
          />
        </p>
        <p>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id={`degree-${this.props.index}`}
            onChange={this.handleEducationChange}
          />
        </p>
        <div className="date">
          <p>
            <label htmlFor="edFrom">From</label>
            <input
              type="date"
              name="edFrom"
              id={`edFrom-${this.props.index}`}
              onChange={this.handleEducationChange}
            />
          </p>
          <p>
            <label htmlFor="edTo">To</label>
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
