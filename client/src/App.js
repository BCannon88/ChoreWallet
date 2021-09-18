import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./components/login"
import Homepage from "./components/homepage";
import Navigation from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Calendar from 'Calendar';


export const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Navigation/>
        <Calendar />
        <Switch>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/">
              <Homepage/>
            </Route>

        </Switch>

      </div>

    </BrowserRouter>
  )
}


export default App;