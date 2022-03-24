import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Editor from './pages/Editor/Editor';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />
        <Switch>
          <main className='app__main'>
            <Route path="/" exact component={Home} />
            <Route path="/editor" component={Editor} />
          </main>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
