import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MenuBar from './components/MenuBar/MenuBar';  

function App() {
  return (
    <div className="App">
      <Router>
        <MenuBar />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/chat" component={Chat} />
      </Router>
    </div>
  );
}

export default App;
