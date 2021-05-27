import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Friends from "./Friends";
import Error from "./Error";
import Menu from "./Menu";
import Animals from "./Animals";

function App() {
  return (
    <Router>
      <div className="alert alert-primary">
        <div className="container">
          <h1>React Router Demo App</h1>
        </div>
      </div>
      <div className="container">
        <div>
          <Menu />
        </div>
        <div>
          <Switch>
            {/* Method #1 */}
            <Route path="/" exact={true}>
              <Home />
            </Route>

            {/* Method #2 */}
            <Route path="/friends" component={Friends} />

            {/* Method #3 */}
            <Route path="/about">
              <h1>About me</h1>
              <hr />
              <p>Name: Vinod Kumar Kayartaya</p>
              <p>Email: vinod@vinod.co</p>
              <p>City: Bangalore</p>
            </Route>

            {/* Method #4 */}
            <Route path="/animals" render={() => <Animals />} />

            {/* Error handling; make sure to include <Switch> */}
            <Route path="*" component={() => <Error />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
