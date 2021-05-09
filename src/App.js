import React from 'react'
import './App.css';
import Gallery from './Gallery';
import Home from './home';
import {Route ,Switch} from 'react-router-dom';
import About from './About';
import Rooms from './rooms';
import Pagenotfound from './pagenotfound';

function App() {
  return (
    <div className="app">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/about" component={About} />
      <Route path="/rooms" component={Rooms} />
      <Route component={Pagenotfound} />
    </Switch>
    </div>
  );
}

export default App;
