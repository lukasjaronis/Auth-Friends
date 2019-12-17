import React, { useState } from 'react';
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { axiosWithAuth } from '../utils/axiosWithAuth';


const useStyles = makeStyles(theme => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 200,
      }
    },
  }));

const AddAFriend = () => {
    const [friendData, setFriendData] = useState({name: '', age: '', email: ''})


    const handleChange = event => {
        setFriendData(
            {
                ...friendData,
                [event.target.name]: event.target.value
            }
        )
    }

    const onSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
        .post('/friends', friendData)
        .then(response => {
            setFriendData(
                {
                    ...friendData,
                    name: '',
                    age: '',
                    email: ''
                }
            )
        })
        .catch(error => console.log(error))
    }

return(
    <div className="mainContainer">
          <div className="header">
            <h1>Sign In</h1>
          </div>

          <form
            onSubmit={onSubmit}
            className={useStyles.root}
            noValidate
            autoComplete="off"
          >
            <div className="inputOuterContainer">
              <div className="inputContainer">
                <TextField
                  name="name"
                  onChange={handleChange}
                  value={friendData.name}
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                 
                />
              </div>

              <div className="inputContainer">
                <TextField
                name="age"
                onChange={handleChange}
                value={friendData.age}
                id="outlined-basic"
                label="Age"
                variant="outlined"
                 
                />
              </div>
              <div className="inputContainer">
              <TextField
              name="email"
              onChange={handleChange}
              value={friendData.email}
              id="outlined-basic"
              label="Email"
              variant="outlined"
               
              />
            </div>
            </div>

            <div>
              <button>Add Friend</button>
              <div>
              </div>
            </div>
          </form>
        </div>
)

}

export default AddAFriend;