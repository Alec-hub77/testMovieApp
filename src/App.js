import "./App.scss";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Welcome, Home, Login, Register } from "./pages";

function App() {

  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div className="App">
      <HashRouter>
        <Switch> 
          <Route path="/" exact>
          { user ? <Redirect to="/home"/> : <Welcome/>}
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
