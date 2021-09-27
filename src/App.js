import { CssBaseline } from "@material-ui/core";
import { Switch, Route} from "react-router-dom";
import Navbar from './components/shared/Navbar';
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </>
  );
}

export default App;
