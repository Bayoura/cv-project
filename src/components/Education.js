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
      <div className="section-div">
        <p className="label-input-wrap">
          <label htmlFor={`subject-${this.props.index}`}>Subject</label>
          <input
            type="text"
            name="subject"
            id={`subject-${this.props.index}`}
            onChange={this.handleEducationChange}
          />
        </p>
        <p className="label-input-wrap">
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
        <p className="label-input-wrap">
          <label htmlFor={`edCity-${this.props.index}`}>City</label>
          <input
            type="text"
            name="edCity"
            id={`edCity-${this.props.index}`}
            onChange={this.handleEducationChange}
          />
        </p>
        <p className="label-input-wrap">
          <label htmlFor={`degree-${this.props.index}`}>Degree</label>
          <input
            type="text"
            name="degree"
            id={`degree-${this.props.index}`}
            onChange={this.handleEducationChange}
          />
        </p>
        <div className="date label-input-wrap">
          <p>
            <label htmlFor={`edFrom-${this.props.index}`}>From</label>
            <input
              type="text"
              name="edFrom"
              placeholder="2012"
              id={`edFrom-${this.props.index}`}
              onChange={this.handleEducationChange}
            />
          </p>
          <p>
            <label htmlFor={`edTo-${this.props.index}`}>To</label>
            <input
              type="text"
              name="edTo"
              placeholder="2016"
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
