import React from "react";

class Education extends React.Component {
  render() {
    return (
      <section>
        <h2>Education</h2>
        <p>
          <label htmlFor="">School/University</label>
          <input type="" name="" id="" />
        </p>
        <p>
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" />
        </p>
        <p>
          <label htmlFor="degree">Degree</label>
          <input type="text" name="degree" id="degree" />
        </p>
        <div className="date">
          <p>
            <label htmlFor="">From</label>
            <input type="date" name="" id="" />
          </p>
          <p>
            <label htmlFor="">To</label>
            <input type="date" name="" id="" />
          </p>
        </div>
      </section>
    );
  }
}

export default Education;
