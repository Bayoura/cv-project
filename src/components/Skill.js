import React from "react";

class Skill extends React.Component {
  constructor() {
    super();
    this.handleRemoval = this.handleRemoval.bind(this);
  }

  handleRemoval() {
    this.props.removeSkill(this.props.skill.id);
  }

  render() {
    return (
      <li>
        <span>{this.props.skill.title}</span>
        <button type="button" onClick={this.handleRemoval}>
          Remove
        </button>
      </li>
    );
  }
}

export default Skill;
