import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import Sidebar from "./components/ResponsiveDrawer";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard"
import Training from "./components/Training"
import ScreenRecording from "./components/ScreenRecording"
// Amplify.configure(awsExports);

function App(/*{ signOut, user }*/) {
  return (
    <>
      <Sidebar /*user={user} signOut={signOut}*/>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home /*user={user} signOut={signOut} */ />
          </Route>
          <Route path="/leaderboard" exact>
            <Leaderboard />
          </Route>
          <Route path="/training" exact>
            <Training />
          </Route>
          <Route path="/screen-recording" exact>
            <ScreenRecording />
          </Route>
        </Switch>
      </ Sidebar>
    </>
  );
}

export default App;
