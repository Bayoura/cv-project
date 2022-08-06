import React from "react";
import Education from "./Education";

function EducationList({
  educationList,
  setEducationChange,
  addEducation,
  removeEducation,
}) {
  // the remove button only appears if there is more than one education item
  let check = educationList.length >= 2 ? true : false;
  let button;
  if (check) {
    button = (
      <button
        className="remove-btn"
        title="Remove the last section"
        type="button"
        onClick={removeEducation}
      >
        Remove
      </button>
    );
  } else {
    button = <></>;
  }
  return (
    <section className="education-input-section">
      <h2>Education</h2>
      {educationList.map((education, index) => {
        return (
          <Education
            key={education.id}
            index={index}
            education={education}
            setEducationChange={setEducationChange}
          />
        );
      })}
      <div className="button-wrap">
        <button
          title="Add another education section"
          type="button"
          onClick={addEducation}
        >
          +
        </button>
        {button}
      </div>
    </section>
  );
}

export default EducationList;
