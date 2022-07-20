import React from "react";

class SkillList extends React.Component {
  render() {
    return (
      <section>
        <h2>Skills</h2>
        <ul>
          {this.props.skillList.map((skill) => {
            return <li key={skill.id}>{skill.title}</li>;
          })}
        </ul>
      </section>
    );
  }
}

export default SkillList;
