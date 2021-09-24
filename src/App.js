import { Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
