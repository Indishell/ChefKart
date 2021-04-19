import React from 'react'
import FirstAssignment from './Components/FirstAssignment'

import { Button } from 'react-bootstrap'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Profile from './Components/Profile';

const App = () => {
  return (
    <BrowserRouter>
    
    <Route exact path = '/'>
        <div>
          <nav>
            <Link to = "/card"> <h4 className ="px-4"> Card </h4></Link>
          </nav>
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
