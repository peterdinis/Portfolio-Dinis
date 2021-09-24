import { Switch, Route} from "react-router-dom";
import Navbar from './components/shared/Navbar';
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
