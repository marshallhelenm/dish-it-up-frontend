import React, { Component } from 'react'
import Logo from '../components/Logo'
import ProfilePhoto from '../components/ProfilePhoto'
import NavDrop from './NavDrop'

class NavBar extends Component {
    render(){

        return( 
        <div id='NavBar' >

            <Logo />
            <ProfilePhoto />
            <NavDrop />

        </div>
        )
    }


}

export default NavBar