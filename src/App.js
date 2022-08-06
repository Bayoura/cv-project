import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactInfo from "./components/ContactInfo";
import Profile from "./components/Profile";
import EducationList from "./components/EducationList";
import ExperienceList from "./components/ExperienceList";
import Skills from "./components/Skills";
import Preview from "./components/preview/Preview";

function App() {
  const emptyCV = {
    userInfo: { fName: "", lName: "", address: "", mail: "", phone: "" },
    profile: "",
    educationList: [
      {
        id: uuidv4(),
        facility: "",
        subject: "",
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
    skills: { skill: "", skillList: [] },
  };
  const [cv, setCv] = useState(emptyCV);

  function setContactChange(e) {
    const { name, value } = e.target;
    const { ...contactData } = cv.userInfo;
    contactData[name] = value;
    setCv((current) => {
      return {
        ...current,
        userInfo: contactData,
      };
    });
  }

  function setProfileChange(e) {
    let value = e.target.value;
    setCv((current) => {
      return {
        ...current,
        profile: value,
      };
    });
  }

  function setEducationChange(id, target) {
    const { name, value } = target;
    const [...educationData] = cv.educationList;
    const index = educationData.findIndex((item) => item.id === id);
    educationData[index][name] = value;
    setCv((current) => {
      return {
        ...current,
        educationList: educationData,
      };
    });
  }

  function setExperienceChange(id, target) {
    const { name, value } = target;
    const [...experienceData] = cv.experienceList;
    const index = experienceData.findIndex((item) => item.id === id);
    experienceData[index][name] = value;
    setCv((current) => {
      return {
        ...current,
        experienceList: experienceData,
      };
    });
  }

  function setSkillChange(e) {
    const [...list] = cv.skills.skillList;
    setCv((current) => {
      return {
        ...current,
        skills: {
          skill: e.target.value,
          skillList: list,
        },
      };
    });
  }

  function addEducation() {
    const [...prevList] = cv.educationList;
    const newList = prevList.concat({
      id: uuidv4(),
      facility: "",
      edCity: "",
      degree: "",
      edFrom: "",
      edTo: "",
    });
    setCv((current) => {
      return {
        ...current,
        educationList: newList,
      };
    });
  }

  function addExperience() {
    const [...prevList] = cv.experienceList;
    const newList = prevList.concat({
      id: uuidv4(),
      company: "",
      position: "",
      tasks: "",
      expCity: "",
      expFrom: "",
      expTo: "",
    });
    setCv((current) => {
      return {
        ...current,
        experienceList: newList,
      };
    });
  }

  function addSkill() {
    const newSkill = cv.skills.skill;
    if (newSkill === "") return;
    setCv((current) => {
      return {
        ...current,
        skills: {
          skillList: cv.skills.skillList.concat({
            title: newSkill,
            id: uuidv4(),
          }),
          skill: "",
        },
      };
    });
  }

  function removeEducation() {
    const newList = cv.educationList;
    newList.pop();
    setCv((current) => {
      return {
        ...current,
        educationList: newList,
      };
    });
  }

  function removeExperience() {
    const newList = cv.experienceList;
    newList.pop();
    setCv((current) => {
      return {
        ...current,
        experienceList: newList,
      };
    });
  }

  function removeSkill(id) {
    const newList = [...cv.skills.skillList];
    newList.splice(
      newList.findIndex((skill) => skill.id === id),
      1
    );
    setCv((current) => {
      return {
        ...current,
        skills: {
          skill: cv.skills.skill,
          skillList: newList,
        },
      };
    });
  }

  return (
    <div className="app">
      <header>
        <h1>CV Creator</h1>
      </header>
      <main>
        <form>
          <ContactInfo setContactChange={setContactChange} />
          <Skills
            skills={cv.skills}
            setSkillChange={setSkillChange}
            addSkill={addSkill}
            removeSkill={removeSkill}
          />
          <Profile setProfileChange={setProfileChange} />
          <EducationList
            educationList={cv.educationList}
            setEducationChange={setEducationChange}
            addEducation={addEducation}
            removeEducation={removeEducation}
          />
          <ExperienceList
            experienceList={cv.experienceList}
            setExperienceChange={setExperienceChange}
            addExperience={addExperience}
            removeExperience={removeExperience}
          />
        </form>
        <Preview cv={cv} />
      </main>
    </div>
  );
}

export default App;
