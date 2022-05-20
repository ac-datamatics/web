import "./Home.css"
import isBrowserCompatible from "./compatibility"
import CCP from "./CCP"

const Home = (props) => {
  // const {user, signOut } = props;
  return (
    <div>
      <h1>Home Page!</h1>
      <div id={"ccp"}>
          {isBrowserCompatible() && <CCP instanceURL={"https://ac-datamatics.my.connect.aws/ccp-v2"} />}
        </div>
    </div>
  )
};

export default Home;
