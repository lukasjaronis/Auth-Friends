import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendCards extends Component {
state = {
    friends: []
};

componentDidMount() {
    this.getData();
}

getData = () => {
    axiosWithAuth()
    .get('/friends')
    .then(response => {
        console.log(response)
        this.setState({
            friends: response.data
        });
    })
    .catch(error => console.log(error))
}




    render() {
        return(
<div></div>
        )
    }
}

export default FriendCards;