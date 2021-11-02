import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Welcome, Home, Login, Register } from "./pages";

function App() {

  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
