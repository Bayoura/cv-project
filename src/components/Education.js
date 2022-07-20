import React from "react";

class Education extends React.Component {
  render() {
    return (
      <section>
        <h2>Education</h2>
        <p>
          <label htmlFor="facility">School/University</label>
          <input
            type="text"
            name="facility"
            id="facility"
            onChange={this.props.handleEducationChange}
          />
        </p>
        <p>
          <label htmlFor="edCity">City</label>
          <input
            type="text"
            name="edCity"
            id="edCity"
            onChange={this.props.handleEducationChange}
          />
        </p>
        <p>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            onChange={this.props.handleEducationChange}
          />
        </p>
        <div className="date">
          <p>
            <label htmlFor="edFrom">From</label>
            <input
              type="date"
              name="edFrom"
              id="edFrom"
              onChange={this.props.handleEducationChange}
            />
          </p>
          <p>
            <label htmlFor="edTo">To</label>
            <input
              type="date"
              name="edTo"
              id="edTo"
              onChange={this.props.handleEducationChange}
            />
          </p>
        </div>
      </section>
    );
  }
}

export default Education;
