import React from "react";
import ContactInfo from "./ContactInfo";
import Profile from "./Profile";
import Education from "./Education";
import Experience from "./Experience";
import SkillList from "./SkillList";
import ReactToPrint from "react-to-print";

// this must stay a class component in order for react-to-print to work
class Preview extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef(null);
  }

  render() {
    // if user has no work experience, the section won't show up in the preview
    let notEmpty = false;
    this.props.cv.experienceList.some((experience) => {
      for (let property in experience) {
        if (experience[property] !== "" && property !== "id") notEmpty = true;
      }
      return notEmpty;
    });

    let experience;
    if (notEmpty) {
      experience = <Experience experienceList={this.props.cv.experienceList} />;
    } else {
      experience = <></>;
    }

    return (
      <div>
        <div ref={(el) => (this.myRef = el)} className="print-container">
          <div className="sidebar">
            <ContactInfo userInfo={this.props.cv.userInfo} />
            <SkillList skillList={this.props.cv.skills.skillList} />
          </div>
          <div className="main-content">
            <Profile
              profile={this.props.cv.profile}
              name={this.props.cv.userInfo}
            />
            <Education educationList={this.props.cv.educationList} />
            {experience}
          </div>
        </div>
        <ReactToPrint
          trigger={() => <button>Print this</button>}
          content={() => this.myRef}
        />
      </div>
    );
  }
}

export default Preview;
