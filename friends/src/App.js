import React from 'react';
import './App.css';
import Login from './components/Login';
import styled from 'styled-components';

const AppStyles = styled.div`

height: 100vh;
margin: 0 auto;
padding: 5rem;
background: #EAE7DC;

`;



function App() {
  return (
    <AppStyles>
    <div className="App">
     <Login />
    </div>
    </AppStyles>
  );
}

export default App;
