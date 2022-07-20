import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <section>
        <h2>Work Experience</h2>
        <p>
          <label htmlFor="company">Company</label>
          <input type="text" name="company" id="company" />
        </p>
        <p>
          <label htmlFor="position">Position</label>
          <input type="text" name="position" id="position" />
        </p>
        <p>
          <label htmlFor="">Main tasks</label>
          <input type="text" name="" id="" />
        </p>
        <p>
          <label htmlFor="">City</label>
          <input type="text" name="" id="" />
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

export default Experience;
