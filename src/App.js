import './App.css';
import Navigation from './components/Navigation';
// import Navicruz from './components/Navicruz';
import Home from './components/Home';
import About from './components/About';
import FAQ from './components/FAQ';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function App() {
  return (
    <Router>
        <Navigation />
        {/* <Navicruz /> */}
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/faq" component={FAQ}/>

        </Switch>
    </Router>
  );
}

export default App;
