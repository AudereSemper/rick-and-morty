import React from 'react';
import Home from 'src/app/pages/Home';
import Header from 'src/app/components/Header';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/myCharacters">
          <h1>
            myChars
          </h1>
          <h1>
            myChars
          </h1>
          <h1>
            myChars
          </h1>
          <h1>
            myChars
          </h1>
          <h1>
            myChars
          </h1>
          <h1>
            myChars
          </h1>
          <h1>
            myChars
          </h1>
          <h1>
            myChars
          </h1>
        </Route>
        <Route exact path="/about">
          <h1>
            about
          </h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
