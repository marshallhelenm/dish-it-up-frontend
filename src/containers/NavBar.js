import React, { Component } from 'react'
import Logo from '../components/Logo'
import ProfilePhoto from '../components/ProfilePhoto'
import NavDrop from './NavDrop'
import { Button } from 'semantic-ui-react'

class NavBar extends Component {

    ifLoggedIn = components => {
        if (this.props.loggedIn){
            return components.map(comp => {
                return <div>
                    {comp}
                </div>
            })
        } else {
            return null
        }
    }

    render(){

        return( 
        <div id='nav-bar' >
            <div>
            <Logo />
            </div>
            {this.ifLoggedIn([
                <ProfilePhoto />,
                <NavDrop />,
                <Button type='submit' onClick={this.props.onLogOut} >Log Out</Button>
            ]
            )}

        </div>
        )
    }


}

export default NavBar