import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import Sidebar from "./components/ResponsiveDrawer";
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <Sidebar user={user} signOut={signOut} />
    </>
  );
}

export default withAuthenticator(App);
