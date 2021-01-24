import React from 'react';
import Home from 'src/app/pages/Home';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
