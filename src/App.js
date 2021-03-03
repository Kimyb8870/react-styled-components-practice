import { NavbarContainer } from "./containers/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarContainer />
      </Router>
    </div>
  );
}

export default App;
