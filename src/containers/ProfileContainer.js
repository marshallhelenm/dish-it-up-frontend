import React, { Component } from 'react'
import ProfilePhoto from '../components/ProfilePhoto'


class ProfileContainer extends Component {
    render(){
        return(
        <div id='profile-container' >
            Profile column
            <ProfilePhoto />
        </div>
        )
    }


}

export default ProfileContainer