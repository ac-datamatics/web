import './login.css';
import AdminDash from '../admin_dash/admin_dash';
import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function Login() {

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

    const successfull = {
        color: 'white',
    };

    // <Router>
    //     <Switch>
    //         <Route exact path="/admin"/> <AdminDash /> <Route/>
    //     </Switch>
    // </Router>

    return (       
    <Router> 
        <div className="login">
            <div className="login-form">
                <div className="title_login">Welcome, please sign in</div>
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
                        <div>
                            <Switch>
                                <Route exact path="/admin"/> <AdminDash /> <Route/>
                            </Switch>
                            <Link to="/admin">Submit</Link>
                        </div>
                    </form>
                </div>
                {/* {isSubmitted ? <div style={successfull}>User is successfully logged in</div> : renderForm} */}
            </div>
            <div className="forgot_pass"> <p>Forgot password?</p> </div>
        </div>
    </Router>
    ); 
}

export default Login;