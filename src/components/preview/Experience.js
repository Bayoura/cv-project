import React from "react";

function Experience({ experienceList }) {
  return (
    <section>
      <h2>
        <i className="fa-solid fa-briefcase"></i>Work Experience
      </h2>
      {experienceList.map((experience) => {
        return (
          <div key={experience.id} className="experience-wrap">
            <div>
              {experience.expFrom} - {experience.expTo}
            </div>
            <div>
              <div className="position">{experience.position}</div>
              <div>
                {experience.company}, {experience.expCity}
              </div>
              <div>{experience.tasks}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Experience;
