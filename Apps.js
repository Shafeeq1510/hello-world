import react from "react";
import "./App.css"
import Headers from "./Headers";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
export default function Apps(){
    return(
      <Router>
          <div className="app">
              <Switch>
                  <Route path="/checkout">
                      <h1>Checkout</h1>

                  </Route>
                  <Route path="/login">
                      <h1>Login page</h1>

                  </Route>
                  <Route path="/">
                      <Headers />
                      <h1>Home page</h1>
                  </Route>
              </Switch>
          </div>
      </Router>
    )
}
