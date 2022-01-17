import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/create"><Create /></Route>
                      <Route path="/postsdata/:id"><BlogDetails /></Route>
                    
            <Route path="*"><NotFound /></Route>
          </Switch>
        </div>

        <div></div>
      </div>
    </Router>
  );
}

export default App;
