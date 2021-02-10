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
          <Route exact path="/unnamed_host">
            <Home />
          </Route>

          <Route path="/unnamed_host/chat/:id" component={ Chat } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;