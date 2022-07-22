import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ContactInfo from "./components/ContactInfo";
import EducationList from "./components/EducationList";
import ExperienceList from "./components/ExperienceList";
import Skills from "./components/Skills";
import Preview from "./components/preview/Preview";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        fName: "",
        lName: "",
        mail: "",
        phone: "",
      },
      educationList: [
        {
          id: uuidv4(),
          facility: "",
          edCity: "",
          degree: "",
          edFrom: "",
          edTo: "",
        },
      ],
      experienceList: [
        {
          id: uuidv4(),
          company: "",
          position: "",
          tasks: "",
          expCity: "",
          expFrom: "",
          expTo: "",
        },
      ],
      skills: {
        skill: "",
        skillList: [],
      },
    };
    this.setContactChange = this.setContactChange.bind(this);
    this.setEducationChange = this.setEducationChange.bind(this);
    this.setExperienceChange = this.setExperienceChange.bind(this);
    this.setSkillChange = this.setSkillChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
    this.removeExperience = this.removeExperience.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
  }

  setContactChange(e) {
    const { name, value } = e.target;
    const { ...contactData } = this.state.userInfo;
    contactData[name] = value;
    this.setState({ userInfo: contactData });
  }

  setEducationChange(id, target) {
    const { name, value } = target;
    const [...educationData] = this.state.educationList;
    const index = educationData.findIndex((item) => item.id === id);
    educationData[index][name] = value;
    this.setState({ educationList: educationData });
  }

  setExperienceChange(id, target) {
    const { name, value } = target;
    const [...experienceData] = this.state.experienceList;
    const index = experienceData.findIndex((item) => item.id === id);
    experienceData[index][name] = value;
    this.setState({ experienceList: experienceData });
  }

  setSkillChange(e) {
    const [...list] = this.state.skills.skillList;
    this.setState({
      skills: {
        skill: e.target.value,
        skillList: list,
      },
    });
  }

  addEducation() {
    const [...prevList] = this.state.educationList;
    const newList = prevList.concat({
      id: uuidv4(),
      facility: "",
      edCity: "",
      degree: "",
      edFrom: "",
      edTo: "",
    });
    this.setState({
      educationList: newList,
    });
  }

  addExperience() {
    const [...prevList] = this.state.experienceList;
    const newList = prevList.concat({
      id: uuidv4(),
      company: "",
      position: "",
      tasks: "",
      expCity: "",
      expFrom: "",
      expTo: "",
    });
    this.setState({
      experienceList: newList,
    });
  }

  addSkill() {
    const newSkill = this.state.skills.skill;
    if (newSkill === "") return;
    this.setState({
      skills: {
        skillList: this.state.skills.skillList.concat({
          title: newSkill,
          id: uuidv4(),
        }),
        skill: "",
      },
    });
  }

  removeEducation() {
    const newList = this.state.educationList;
    newList.pop();
    this.setState({
      educationList: newList,
    });
  }

  removeExperience() {
    const newList = this.state.experienceList;
    newList.pop();
    this.setState({
      experienceList: newList,
    });
  }

  removeSkill(id) {
    const newList = [...this.state.skills.skillList];
    newList.splice(
      newList.findIndex((skill) => skill.id === id),
      1
    );
    this.setState({
      skills: {
        skill: this.state.skills.skill,
        skillList: newList,
      },
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>CV Application</h1>
        </header>
        <main>
          <form>
            <ContactInfo setContactChange={this.setContactChange} />
            <EducationList
              educationList={this.state.educationList}
              setEducationChange={this.setEducationChange}
              addEducation={this.addEducation}
              removeEducation={this.removeEducation}
            />
            <ExperienceList
              experienceList={this.state.experienceList}
              setExperienceChange={this.setExperienceChange}
              addExperience={this.addExperience}
              removeExperience={this.removeExperience}
            />
            <Skills
              skills={this.state.skills}
              setSkillChange={this.setSkillChange}
              addSkill={this.addSkill}
              removeSkill={this.removeSkill}
            />
          </form>
          <Preview cv={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
