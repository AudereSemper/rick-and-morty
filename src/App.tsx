import React from 'react';
import Home from 'src/app/pages/Home';
import Header from 'src/app/components/Header';
import Curiosity from 'src/app/pages/Curiosity';
import { Switch, Route, Redirect } from 'react-router';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Redirect exact from="/" to="home" />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/curiosity">
          <Curiosity />
        </Route>
      </Switch>
    </>
  );
}

export default App;
