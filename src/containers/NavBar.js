import React, { Component } from 'react'
import Logo from '../components/Logo'
import ProfilePhoto from '../components/ProfilePhoto'
import NavDrop from './NavDrop'

class NavBar extends Component {
    render(){

        return( 
        <div id='nav-bar' >
            <div>
            <Logo />
            </div>
            <div>
            <ProfilePhoto />
            </div>
            <div>
            <NavDrop />
            </div>

        </div>
        )
    }


}

export default NavBar