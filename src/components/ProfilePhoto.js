import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

class ProfilePhoto extends Component {
    render(){

        return(
            <Image src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' size='medium' circular />
            )
    }


}

export default ProfilePhoto