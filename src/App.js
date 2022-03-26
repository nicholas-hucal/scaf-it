import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Editor from './pages/Editor/Editor';
import Error from './pages/Error/Error'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav/>
        <main className='app__main'>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/editor" component={Editor} />
            <Route path="/error" component={Error}/>
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;