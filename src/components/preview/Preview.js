import React from "react";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import Experience from "./Experience";
import SkillList from "./SkillList";

class Preview extends React.Component {
  render() {
    return (
      <div>
        <ContactInfo userInfo={this.props.cv.userInfo} />
        <Education education={this.props.cv.education} />
        <Experience experience={this.props.cv.experience} />
        <SkillList skillList={this.props.cv.skills.skillList} />
      </div>
    );
  }
}

export default Preview;
