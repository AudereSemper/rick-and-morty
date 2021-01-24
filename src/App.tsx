import React from 'react';
import Home from 'src/app/pages/Home';
import Header from 'src/app/components/Header';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <Switch>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/myCharacter">
        <div>
          myChars
        </div>
      </Route>
      <Route exact path="/about">
        <div>
          about
        </div>
      </Route>
    </Switch>
  );
}

export default App;
