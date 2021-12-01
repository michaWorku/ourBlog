import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="posts" component={Home} />
        {currentUser ? (
          <Route path="/login" component={Login} />
        ) : (
          <Route exact path="/" component={Home} />
        )}
        {currentUser ? (
          <Route path="/login" component={Register} />
        ) : (
          <Route exact path="/" component={Home} />
        )}
        {currentUser ? (
          <Route path="/settings" component={Settings} />
        ) : (
          <Route exact path="/" component={Home} />
        )}
        {currentUser ? (
          <Route path="/write" component={Write} />
        ) : (
          <Route exact path="/" component={Home} />
        )}

        <Route path="/post/:postId" component={Single} />
      </Switch>
    </Router>
  );
}

export default App;
