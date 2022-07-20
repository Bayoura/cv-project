import React from "react";
import Skill from "./Skill";

class Skills extends React.Component {
  render() {
    return (
      <section>
        <h2>Skills</h2>
        <input
          type="text"
          value={this.props.skills.skill}
          onChange={this.props.handleSkillChange}
        />
        <button type="button" onClick={this.props.addSkill}>
          Add
        </button>
        <ul>
          {this.props.skills.skillList.map((skill) => {
            return (
              <Skill
                key={skill.id}
                skill={skill}
                removeSkill={this.props.removeSkill}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Skills;