import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.less';


import { Dashboard, Auth } from './modules'; 

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Auth />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
