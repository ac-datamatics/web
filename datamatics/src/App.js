import './App.css';
import React, { useState } from "react";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); //submitted unaem and pass is started in false

  // dummy user login database
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  // dictionary of errors to be displayed
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    // prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // find username in dummy database
    const userData = database.find((user) => user.username === uname.value);

    // compare user info
    if (userData) {
      // if password is wrong
      if (userData.password !== pass.value) {
        // display error message
        setErrorMessages({ name: "pass", message: errors.pass });
      } 
      // if password is correct
      else {
        setIsSubmitted(true); // variable is equal to true
      }
    }
    // if username is incorrect 
    else {
      // display error maessage
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // jsx code for error message
  const renderErrorMessage = (name) => name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  // jsx code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="App">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;