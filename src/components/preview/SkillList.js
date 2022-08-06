import React from "react";

function SkillList({ skillList }) {
  return (
    <section>
      <h2>
        <i className="fa-solid fa-puzzle-piece"></i>Skills
      </h2>
      <ul>
        {skillList.map((skill) => {
          return <li key={skill.id}>{skill.title}</li>;
        })}
      </ul>
    </section>
  );
}

export default SkillList;
