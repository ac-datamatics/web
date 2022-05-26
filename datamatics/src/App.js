import Sidebar from "./components/ResponsiveDrawer";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/Tabs/Home";
import Leaderboard from "./components/Tabs/Leaderboard";
import Training from "./components/Tabs/Training/Training";

function App() {
  return (
    <>
      <Sidebar>
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
      </Sidebar>
    </>
  );
}

export default App;
