import React from 'react';
import './App.css';
import Login from './components/Login';
import styled from 'styled-components';

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
    <div className="App">
     <Login />
    </div>
    </AppStyles>
  );
}

export default App;