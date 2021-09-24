import { Switch, Route} from "react-router-dom";
import Navbar from './components/shared/Navbar';
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </>
  );
}

export default App;
