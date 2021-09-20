import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Login from "./components/login";
import Homepage from "./components/homepage";
import Navigation from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Signup from './components/signup';



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const App = () => {

   const [dateState, setDateState] = useState(new Date())

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <Navigation />
          {/* <Calendar value={value} onChange= {onChange} className="react-calendar" 
         />   */}
          <Switch>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>


            <Route exact path="/">
              <Homepage />
            </Route>
           <Route exact path="/calendar">
             <Calendar 
                value={dateState}
                onChange={setDateState}
              />
                <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
            </Route>

          </Switch>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;