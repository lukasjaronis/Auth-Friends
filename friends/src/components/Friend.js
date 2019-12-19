import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import DeleteAFriend from './DeleteAFriend';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      margin: '1.3rem'
    },
    // deleteDiv: {
    //   margin: '1rem;'
    // }
  }));

const Friend = props => {
    const classes = useStyles();
    return(
        <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
      {props.friend.name}
      </Typography>
      <Typography component="p">
      <span>{props.friend.age}</span>
      <span>{props.friend.email}</span>
      </Typography>
    </Paper>
    )
}

export default Friend;