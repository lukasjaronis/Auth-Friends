import React from 'react';
import './App.css';
import styled from 'styled-components';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




const AppStyles = styled.div`

display: flex;
justify-content: center;
align-items: center;
height: 100vh;
margin: 0 auto;
padding: 5rem;
background: #65ccb8;

`;



function App() {
  return (
    <AppStyles>
    <Router>
    <div className="App">
      <Switch>
        <PrivateRoute path="/protected" component={Friends} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  </Router>
    </AppStyles>
    
  );
}

export default App;
