import React from "react";
import "./App.css";
import ContactInfo from "./components/ContactInfo";
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
      education: {
        school: "",
        city: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
      work: {
        company: "",
        position: "",
        tasks: "",
        city: "",
        startDate: "",
        endDate: "",
      },
      skills: [],
    };
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
  }

  handlePersonalChange(e) {
    const { name, value } = e.target;
    const { ...personalData } = this.state.userInfo;
    personalData[name] = value;
    this.setState({ userInfo: personalData });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>CV Application</h1>
        </header>
        <main>
          <form>
            <ContactInfo handleChange={this.handlePersonalChange} />
          </form>
          <Preview
            fName={this.state.userInfo.fName}
            lName={this.state.userInfo.lName}
            mail={this.state.userInfo.mail}
            phone={this.state.userInfo.phone}
          />
        </main>
      </div>
    );
  }
}

export default App;
