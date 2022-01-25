import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <h3>FRIENDS DATABASE</h3>
          <div className='link-container'>
            <Link className='link' to='/login'>
              LOGIN
            </Link>
            <Link className='link' to='/friendlist'>
              FRIENDLIST
            </Link>
            <Link className='link' to='/addfriend'>
              ADDFRIEND
            </Link>
            <Link className='link' to='/logout'>
              LOGOUT
            </Link>
          </div>
        </header>
        <Route exact path='/' component={Login} />
        <Route path='/login' component={Login} />
        <Route path='/friendlist' component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
