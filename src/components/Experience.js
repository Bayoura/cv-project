import React from "react";

function Experience({ index, experience, setExperienceChange }) {
  function handleExperienceChange(e) {
    setExperienceChange(experience.id, e.target);
  }

  return (
    <div className="section-div">
      <p className="label-input-wrap">
        <label htmlFor={`position-${index}`}>Position</label>
        <input
          type="text"
          name="position"
          id={`position-${index}`}
          onChange={handleExperienceChange}
        />
      </p>
      <p className="label-input-wrap">
        <label htmlFor={`company-${index}`}>Company</label>
        <input
          type="text"
          name="company"
          id={`company-${index}`}
          onChange={handleExperienceChange}
        />
      </p>
      <p className="label-input-wrap">
        <label htmlFor={`expCity-${index}`}>City</label>
        <input
          type="text"
          name="expCity"
          id={`expCity-${index}`}
          onChange={handleExperienceChange}
        />
      </p>
      <p className="label-input-wrap">
        <label htmlFor={`tasks-${index}`}>Main tasks</label>
        <input
          type="text"
          name="tasks"
          id={`tasks-${index}`}
          onChange={handleExperienceChange}
        />
      </p>
      <div className="date label-input-wrap">
        <p>
          <label htmlFor={`expFrom-${index}`}>From</label>
          <input
            type="text"
            name="expFrom"
            placeholder="2012"
            id={`expFrom-${index}`}
            onChange={handleExperienceChange}
          />
        </p>
        <p>
          <label htmlFor={`expTo-${index}`}>To</label>
          <input
            type="text"
            name="expTo"
            placeholder="2012"
            id={`expTo-${index}`}
            onChange={handleExperienceChange}
          />
        </p>
      </div>
    </div>
  );
}

export default Experience;
