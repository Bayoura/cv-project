import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>CV Application</h1>
        </header>
        <main>
          <form>
            <section>
              <h2>Contact Information</h2>
              <div className="fullName">
                <p>
                  <label for="fName">First Name</label>
                  <input type="text" name="fName"  id="fName" />
                </p>
                <p>
                  <label for="lName">Last Name</label>
                  <input type="text" name="lName" id="lName" />
                </p>
              </div>
              <p>
                <label for="mail">E-Mail</label>
                <input type="email" name="mail" id="mail" />
              </p>
              <p>
                <label for="phone">Phone number</label>
                <input type="tel" name="phone" id="phone" />
              </p>
            </section>

            <section>
              <h2>Education</h2>
              <p>
                <label for="">School/University</label>
                <input type="" name="" id="" />
              </p>
              <p>
                <label for="city">City</label>
                <input type="text" name="city" id="city" />
              </p>
              <p>
                <label for="degree">Degree</label>
                <input type="text" name="degree" id="degree" />
              </p>
              <div className="date">
                <p>
                  <label for="">From</label>
                  <input type="date" name="" id="" />
                </p>
                <p>
                  <label for="">To</label>
                  <input type="date" name="" id="" />
                </p>
              </div>
            </section>

            <section>
              <h2>Work Experience</h2>
              <p>
                <label for="company">Company</label>
                <input type="text" name="company" id="company" />
              </p>
              <p>
                <label for="position">Position</label>
                <input type="text" name="position" id="position" />
              </p>
              <p>
                <label for="">City</label>
                <input type="text" name="" id="" />
              </p>
              <div className="date">
                <p>
                  <label for="">From</label>
                  <input type="date" name="" id="" />
                </p>
                <p>
                  <label for="">To</label>
                  <input type="date" name="" id="" />
                </p>
              </div>
            </section>

            <section>
              <h2>Skills</h2>
              <input type="text" />
            </section>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
