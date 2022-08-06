import React from "react";

function Skill({ skill, removeSkill }) {
  function handleRemoval() {
    removeSkill(skill.id);
  }

  return (
    <li>
      <span>{skill.title}</span>
      <button
        className="remove-btn"
        title="Remove skill"
        type="button"
        onClick={handleRemoval}
      >
        Remove
      </button>
    </li>
  );
}

export default Skill;
