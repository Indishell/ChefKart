import React from 'react'
import FirstAssignment from './Components/FirstAssignment'

import { Button, Navbar } from 'react-bootstrap'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Profile from './Components/Profile';
// import './style.css';

const App = () => {
  return (
    <BrowserRouter>

    <Route exact path = '/'>
        <div>
          
        </div>
      </Route>
      <Route  exact path = '/card'>
        <FirstAssignment/>
      </Route>

      <Route  exact path = '/profile'>
        <Profile/>
      </Route>
      
    </BrowserRouter>
  );
}

export default App;
