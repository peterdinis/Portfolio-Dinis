import { CssBaseline } from "@material-ui/core";
import Navbar from "./components/shared/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <Homepage />
    </>
  );
}

export default App;
