import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friend from './Friend';

const Friends = () => {
    const [friends, setFriends] = useState([])

    useEffect( () => {
        axiosWithAuth()
        .get('/friends')
        .then(response => setFriends(response.data))
        .catch(error => console.log(error))
    } )

    return(
        <div>
        <h1>Friends</h1>
        {friends.map(friend => (
            <div key={friend.id}><Friend friend={friend} /></div>
        ))}
        </div>
    )
}

export default Friends;