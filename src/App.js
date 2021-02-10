import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./unnamed/Home"
import Chat from "./unnamed/Chat"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/chat/:id" component={ Chat } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;