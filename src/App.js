import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './Signin';
import Profile from './Profile';
import Home from './Home';

function App() {
  // const token = localStorage.getItem('accessToken');
  const token = localStorage.getItem('user_Token');

  if (!token) {
    return <Signin />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            {/* <Profile /> */}
            <Signin />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;