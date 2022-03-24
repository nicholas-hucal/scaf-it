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
          <Route to="/" component={Home} />
          <Route to="/editor" component={Editor} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
