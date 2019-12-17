import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

import AddAFriend from './AddAFriend';
import Friend from './Friend';



const Friends = () => {
    const [friends, setFriends] = useState([])

    useEffect( () => {
        axiosWithAuth()
        .get('/friends')
        .then(response => setFriends(response.data))
        .catch(error => console.log(error))
    } )

    const deleteFriend = id => {
		console.log(id);
		axiosWithAuth()
			.delete("friends/" + id)
			.then(response => {
				console.log(response);
				setFriends(response.data);
			})
			.catch(error => {
				console.log(error);
			});
	};

    return(
        <div>
        <AddAFriend />
        <h1>Friends</h1>
        {friends.map(friend => (
            <div>
            <div key={friend.id}><Friend friend={friend} /></div>
            <div>
            <HighlightOffOutlinedIcon onClick={e => deleteFriend(friend.id)} />
            </div>
            </div>
        ))}
        </div>
    )
}

export default Friends;