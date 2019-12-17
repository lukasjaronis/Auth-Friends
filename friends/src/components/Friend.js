import React from 'react';

const Friend = props => {
    return(
        <div>
        <h3>{props.friend.name}</h3>
        <span>{props.friend.age}</span>
        <span>{props.friend.email}</span>
        </div>
    )
}

export default Friend;