import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Welcome, Home } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
