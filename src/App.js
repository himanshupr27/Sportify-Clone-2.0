import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Search from './components/Search';
import Player from './components/Player';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={() => <Auth authType="login" />} />
        <Route path="/register" component={() => <Auth authType="register" />} />
        <Route path="/search" component={Search} />
        <Route path="/player" component={Player} />
        <Route path="/" exact component={() => <div>Home</div>} />
      </Switch>
    </Router>
  );
};

export default App;