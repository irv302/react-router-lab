import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Main from "./components/Main";
import Stock from "./components/Stock";
import Dashboard from "./components/Dashboard";

import stocks from "./stock-data";

import "./style.css";

function App(props) {
  return (
    <div className="App">
       <Header />

      <Switch>
       

        <Route exact path="/">
          <Main />
        </Route>
        <Route
          exct
          path="/stock"
          render={(routerProps) => (
            <Dashboard stockInfo={stocks} {...routerProps} />
          )}
        ></Route>
        <Route
        exact
          path="/stocks/:symbol"
          render={(routerProps) => (
            <Stock stocks={stocks} {...routerProps} />
          )}
        ></Route>

        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
