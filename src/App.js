import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Editor from './pages/Editor/Editor';
import Error from './pages/Error/Error'
import Nav from './components/Nav/Nav';
import Notification from './components/Notification/Notification';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [notification, setNotification] = useState([])

  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />
        <main className='app__main'>
          <Switch>
            <Route path="/" exact>
              <Home setNotification={setNotification} />
            </Route>
            <Route path="/editor">
              <Editor setNotification={setNotification} />
            </Route>
            <Route path="/error">
              <Error setNotification={setNotification} />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
      {notification && notification.map(notif => <Notification key={uuidv4()} title={notif.title} body={notif.body}/>)}
    </div>
  );
}

export default App;