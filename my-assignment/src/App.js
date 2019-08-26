import React from 'react';
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Project from './components/project/Project'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/project" component={Project} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
