import React from "react";
import {Router} from "react-router-dom";
import Login from "./components/login";
import Nav from './components/Nav';

export const App = () => {

  return (
    <Router>
      <div>
        <Nav />
          <div path="/login">
            <Login />
          </div>

      </div>
    </Router>
  )
}


export default App;