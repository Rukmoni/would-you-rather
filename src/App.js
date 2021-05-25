import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from './pages/login';
import DashBoard from './pages/Dashboard';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
	return (
    <BrowserRouter>
    {/* <Navbar /> */}
    <div className="container mt-2" style={{ marginTop: 40 }}>
      <Switch>
        <Route exact path="/">
          <DashBoard />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
       {/*  <Route path="/about">
          <About />
        </Route> */}
       {/*  <Route path="/profile/:name">
          <Profile />
        </Route> */}
      </Switch>
    </div>
  </BrowserRouter>
	);
}

export default App;
