import React from "react";
import Skill from "./Skill";

function Skills({ skills, setSkillChange, addSkill, removeSkill }) {
  return (
    <section>
      <label htmlFor="skill">
        <h2>Skills</h2>
      </label>
      <input
        type="text"
        id="skill"
        name="skill"
        value={skills.skill}
        onChange={setSkillChange}
      />
      <button type="button" onClick={addSkill}>
        Add
      </button>
      <ul>
        {skills.skillList.map((skill) => {
          return (
            <Skill key={skill.id} skill={skill} removeSkill={removeSkill} />
          );
        })}
      </ul>
    </section>
  );
}

export default Skills;
