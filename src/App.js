import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Secured from "./Secured";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="/">
            React-Keycloak
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link className="nav-link" to="/">
                  Public zone
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/secured">
                  Secured zone
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/secured" component={Secured} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
