import React from 'react';
import { deleteFriend } from '../components/Friends';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

const DeleteAFriend = () => {

    return(
        <div>
        <HighlightOffOutlinedIcon onClick={deleteFriend}  />
        </div>
    )
}

export default DeleteAFriend;