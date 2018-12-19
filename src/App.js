import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Game from "./components/Game"
import Home from "./components/Home"
import Leaderboard from "./components/Leaderboard"
import Navbar from "./components/Navbar"
class App extends Component {
  render() {
    return (
      <div>
      <Navbar></Navbar>
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/game" component={Game}/>
          <Route path="/leaderboard" component={Leaderboard}/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
