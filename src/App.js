import Country from "./containers/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryDetail from "./containers/CountryDetail";
import About from "./containers/About/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Country />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/country/:countryName">
            <CountryDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
