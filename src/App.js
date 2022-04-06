import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Editor from './pages/Editor/Editor';
import Error from './pages/Error/Error'
import Nav from './components/Nav/Nav';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />
        <main className='app__main'>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/editor" exact component={Editor}/>
            <Route path="/error" exact component={Error}/>
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;