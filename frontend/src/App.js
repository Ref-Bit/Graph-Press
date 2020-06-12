import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Toasters, Toaster, Footer } from './components'
import './App.css';

const client = new ApolloClient({
  uri: 'http://graph-press.me/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto min-h-screen">
            <Switch>
              <Route exact path="/" component={Toasters}/>
              <Route exact path="/toasters" component={Toasters}/>
              <Route exact path="/toasters/:slug" component={Toaster}/>
            </Switch>
          </div>
        </section>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
