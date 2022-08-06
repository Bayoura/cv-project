import React from "react";

function Education({ index, education, setEducationChange }) {
  function handleEducationChange(e) {
    setEducationChange(education.id, e.target);
  }

  return (
    <div className="section-div">
      <p className="label-input-wrap">
        <label htmlFor={`subject-${index}`}>Subject</label>
        <input
          type="text"
          name="subject"
          id={`subject-${index}`}
          onChange={handleEducationChange}
        />
      </p>
      <p className="label-input-wrap">
        <label htmlFor={`facility-${index}`}>School/University</label>
        <input
          type="text"
          name="facility"
          id={`facility-${index}`}
          onChange={handleEducationChange}
        />
      </p>
      <p className="label-input-wrap">
        <label htmlFor={`edCity-${index}`}>City</label>
        <input
          type="text"
          name="edCity"
          id={`edCity-${index}`}
          onChange={handleEducationChange}
        />
      </p>
      <p className="label-input-wrap">
        <label htmlFor={`degree-${index}`}>Degree</label>
        <input
          type="text"
          name="degree"
          id={`degree-${index}`}
          onChange={handleEducationChange}
        />
      </p>
      <div className="date label-input-wrap">
        <p>
          <label htmlFor={`edFrom-${index}`}>From</label>
          <input
            type="text"
            name="edFrom"
            placeholder="2012"
            id={`edFrom-${index}`}
            onChange={handleEducationChange}
          />
        </p>
        <p>
          <label htmlFor={`edTo-${index}`}>To</label>
          <input
            type="text"
            name="edTo"
            placeholder="2016"
            id={`edTo-${index}`}
            onChange={handleEducationChange}
          />
        </p>
      </div>
    </div>
  );
}

export default Education;
