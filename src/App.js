import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import Login from './Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Signup from './Signup';
import TeslaAccount from './TeslaAccount';

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          {/* Home Page */}
          <Route exact path='/'>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
            <Home />
          </Route>

          {/* Login Page */}
          <Route exact path='/login'>
            {user ? <Redirect to='/tesla-account' /> : <Login />}
          </Route>

          {/* SignUp Page */}
          <Route exact path='/signup'>
            <Signup />
          </Route>

          {/* Tesla Account Page */}
          <Route exact path='/tesla-account'>
            {!user ? (
              <Redirect to='/login' />
            ) : (
              <>
                <TeslaAccount
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                {isMenuOpen && <Menu />}
              </>
            )}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
