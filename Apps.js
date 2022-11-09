import react from "react";
import "./App.css"
import Headers from "./Headers";
import Home from "./Home";

import {BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

export default function Apps(){
    return(
      <Router>
          <div className="app">
              <Switch>
                  <Route path="/checkout">
                      <Headers />
                      <h1>Checkout</h1>

                  </Route>
                  <Route path="/login">
                      <h1>Login page</h1>

                  </Route>
                  <Route path="/">
                      <Headers />
                        <Home />
                     
                  </Route>
              </Switch>
          </div>
      </Router>
    )
}
