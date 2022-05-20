import Sidebar from "./components/ResponsiveDrawer";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/Tabs/Home/Home";
import Leaderboard from "./components/Tabs/Leaderboard";
import Training from "./components/Tabs/Training/Training";
import ScreenRecording from "./components/Tabs/ScreenRecording";

function App() {
  return (
    <>
      <Sidebar >
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home />
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
      </Sidebar>
    </>
  );
}

export default App;
