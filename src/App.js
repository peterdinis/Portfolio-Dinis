import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from './components/shared/Navbar';
import Errorpage from "./pages/Errorpage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path='/404' component={Errorpage} />
        <Redirect from='*' to='/404' />
      </Switch>
    </div>
  );
}

export default App;
