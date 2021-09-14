import React from "react";
import {Router} from "react-router-dom";
import Login from "./components/login"

export const App = () => {

  return (
    <Router>
      <div>

          <div path="/login">
            <Login />
          </div>

      </div>
    </Router>
  )
}


export default App;