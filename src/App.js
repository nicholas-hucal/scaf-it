import './App.scss';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Editor from './pages/Editor/Editor';
import Nav from './components/Nav/Nav';
import axios from 'axios';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const App = () => {

  const [authStatus, setAuthStatus] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/auth/profile`, { withCredentials: true })
      .then(res => {
        setAuthStatus(false)
        setIsLoggedIn(true)
        setProfileData(res.data)
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setAuthStatus(false);
          setIsLoggedIn(false);
        } else {
          console.log('Error authenticating', err);
        }
      });
  }, []);

  return (
    <div className='app'>
      <BrowserRouter>
        <Nav isLoggedIn={isLoggedIn}/>
        <main className='app__main'>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/editor">
              <Editor isLoggedIn={isLoggedIn} />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
