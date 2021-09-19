import React, { useState } from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./components/login"
import Homepage from "./components/homepage";
import Navigation from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import ShowCalendar from './components/calendar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export const App = () => {

  // const [value, onChange] = useState(new Date())

  return (
    <BrowserRouter>
      <div>
        <Navigation/>
         {/* <Calendar value={value} onChange= {onChange} className="react-calendar" 
         />   */}
        <Switch>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/">
              <Homepage/>
            </Route>

           <Route exact path="/Calendar">
             <Calendar 
                // value={value}
                // onChange={onChange}
              />
                {/* <ShowCalendar /> */}
            </Route> 

        </Switch>

      </div>

    </BrowserRouter>
  )
}


export default App;