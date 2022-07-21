import React from "react";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import Experience from "./Experience";
import SkillList from "./SkillList";

class Preview extends React.Component {
  render() {
    // if user has no work experience, the section won't show up in the preview
    let notEmpty = false;
    this.props.cv.experienceList.some((experience) => {
      for (let property in experience) {
        if (experience[property] !== "") notEmpty = true;
      }
      return notEmpty;
    });

    // for (let property in this.props.cv.experienceList) {
    //   if (this.props.cv.experienceList[property] !== "") notEmpty = true;
    // }

    let experience;
    if (notEmpty) {
      experience = <Experience experienceList={this.props.cv.experienceList} />;
    } else {
      experience = <></>;
    }

    return (
      <div>
        <ContactInfo userInfo={this.props.cv.userInfo} />
        <Education educationList={this.props.cv.educationList} />
        {experience}
        <SkillList skillList={this.props.cv.skills.skillList} />
      </div>
    );
  }
}

export default Preview;
