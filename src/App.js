import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import Subjects from './components/Subjects/Subjects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route path = "/home">
            <Home></Home>
          </Route>
          <Route path = "/subjects">
            <Subjects></Subjects>
          </Route>
          <Route path = "/about">
            <About></About>
          </Route>
          <Route path = "/contact">
            <Contact></Contact>
          </Route>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route path = "*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
