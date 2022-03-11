import "./App.css";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/quiz">Successful get 5 marks</Route>
        <Route path="/contact">Thanks Vineet Kumar sharma</Route>
        <Route path="/">
          <Nav />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
