import React from 'react';
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';

function App() {
  const isLoggedIn = localStorage.getItem('token');
  return (
    <div className='App'>
      <header>
        <h3>FRIENDS DATABASE</h3>
        <div className='link-container'>
          <Link className='link' to='/login'>
            LOGIN
          </Link>
          <Link className='link' to='/friends'>
            FRIENDLIST
          </Link>
          <Link className='link' to='/friends/add'>
            ADDFRIEND
          </Link>

          <Link className='link' to='/logout'>
            LOGOUT
          </Link>
        </div>
      </header>
      <Route exact path='/' component={Login} />
      <Route path='/login' component={Login} />
      <PrivateRoute
        exact
        path='/friends'
        component={FriendsList}
        redirectTo='/login'
      />
      <PrivateRoute
        path='/friends/add'
        component={AddFriend}
        redirectTo='/login'
      />
      <PrivateRoute path='/logout' component={Logout} redirectTo='/login' />
    </div>
  );
}

export default App;
