import React, { Component } from "react";
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const LoginStyles = styled.div`

height: 30rem;
width: 30rem;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #d8c3a5;
-webkit-box-shadow: 5px 5px 15px 5px #fff; 
box-shadow: 5px 5px 15px 5px #fff;
border-radius: 3rem;
background: #E98074;

h1 {
    color: #fff;
    letter-spacing: 2px;
}

.inputContainer {
    margin: 2rem;
}

button {
    width: 7rem;
    height: 2.3rem;
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 2px;
}

`;

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200,
    }
  }
}));


class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    },
    isFetching: false
  };

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  loggingIn = event => {
    event.preventDefault();
    this.setState({
      isFetching: true
    });
  };

  render() {
    
    return (
        <LoginStyles>
      <div>
      <div>
      <h1>Sign In</h1>
      </div>
        <form onSubmit={this.loggingIn} className={useStyles.root} noValidate autoComplete="off">
        <div className="inputContainer">
        <TextField name="username" onChange={this.handleChange} value={this.state.credentials.username} id="outlined-basic" label="Username" variant="outlined" />
        </div>
        <div className="inputContainer">
        <TextField name="password" onChange={this.handleChange} value={this.state.credentials.password} id="outlined-basic" label="Password" variant="outlined" />
        </div>
        <div>
        <button>Log In</button>
        {this.state.isFetching && 'Logging In...'}
        </div>
        </form>
      </div>
      </LoginStyles>
    );
  }
}

export default Login;