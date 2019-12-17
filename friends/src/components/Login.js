import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
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
      <div>
        <form onSubmit={this.loggingIn} className={useStyles.root} noValidate autoComplete="off">
        <div>
        <TextField name="username" onChange={this.handleChange} value={this.state.credentials.username} id="outlined-basic" label="Username" variant="outlined" />
        </div>
        <div>
        <TextField name="password" onChange={this.handleChange} value={this.state.credentials.password} id="outlined-basic" label="Password" variant="outlined" />
        </div>
        <div>
        <button>Log In</button>
        {this.state.isFetching && 'Logging In...'}
        </div>
        </form>
      </div>
    );
  }
}

export default Login;