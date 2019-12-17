import React, { useState } from 'react';
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { axiosWithAuth } from '../utils/axiosWithAuth';


const AddAFriendStyles = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 35rem;
height: 30rem;
padding: 3rem;
margin: 2rem;
border: 1px solid black;

.mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 3rem;
    

    .header {
   
        background: #182628;
        width: 100%;
    
      h1 {
        
        color: #fff;
        font-weight: 300;
        letter-spacing: 1px;
        text-transform: uppercase;
       
      }
    }

    .inputOuterContainer {
        padding: 0.6rem;
        width: 100%;
    
        

      .inputContainer {
       
        margin: 2rem;
      }
    }

    button {
      text-align: center;
      width: 9rem;
      height: 3rem;
      font-size: 1rem;
      font-weight: 900;
      letter-spacing: 2px;
      background: none;
      border: 1px solid #fff;
      color: #fff;
      text-transform: uppercase;

      &:hover {
        background: #182628;
      }
    }

    .loginDiv {
        margin: 2rem;
        letter-spacing: 3px;
        font-weight: 600;
        font-size: 2rem;
        color: #fff;
    }
  }

`;

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
        .then(() => {
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
    <AddAFriendStyles>
    <div className="mainContainer">
          <div className="header">
            <h1>Add a Friend</h1>
          </div>

          <form
            onSubmit={onSubmit}
            className={useStyles.root}
            Validate
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
                  required
                 
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
                required
                 
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
              required
               
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
        </AddAFriendStyles>
)

}

export default AddAFriend;