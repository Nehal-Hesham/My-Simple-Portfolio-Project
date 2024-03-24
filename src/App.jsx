import "./App.css";
import Navbar from "./Portfolio-components/Navbar/Navbar";
import Section1 from "./Portfolio-components/ٍSection-1/section1";
import Section2 from "./Portfolio-components/Section-2/section2";
import Section3 from "./Portfolio-components/Section-3/section3";
import Section4 from "./Portfolio-components/Section-4/section4";
import Section5 from "./Portfolio-components/Section-5/Section5";
import Notfound from "./Portfolio-components/Notfound/Notfound";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Section1} />
          <Route path="/about" exact component={Section2} />
          <Route path="/skills" exact component={Section3} />
          <Route path="/adv-skills" exact component={Section4} />
          <Route path="/contact-us" exact component={Section5} />
          <Route path="*" exact component={Notfound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
