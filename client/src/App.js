import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { 
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache, 
  createHttpLink 
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Login from "./components/login"
import Homepage from "./components/homepage";
import Navigation from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Signup from "./components/signup";

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

  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      <div>
        <Navigation/>
        <div>
        <Switch>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>


            <Route exact path="/">
              <Homepage/>
            </Route>

        </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;