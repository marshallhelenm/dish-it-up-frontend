import React, { Component } from 'react'
import Logo from '../components/Logo'
import ProfilePhoto from '../components/ProfilePhoto'
import NavDrop from './NavDrop'
import { Button, Form, Icon } from 'semantic-ui-react'

class NavBar extends Component {

    constructor(){
        super()
        this.state={
            quickSearch: ''
        }
    }

    handleOnChange = (e) => {
        console.log(e.target.value)
        let newUsername = e.target.value
        this.setState((prevState) => ({
            username: newUsername
        }))
    }   

    ifLoggedIn = components => {
        if (this.props.loggedIn === true){
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
                <ProfilePhoto key='profile-photo' />,
                <NavDrop key='nav-drop' />,
                <Form key='quick-search' >
                    <Form.Field>
                        <input  placeholder='Quick Search' onChange={this.handleOnChange} value={this.state.quickSearch} />
                    </Form.Field>
                    <Button icon type='submit'><Icon name='search'/>  </Button>
                </Form>,
                <Button key='quick-search-btn' type='submit' onClick={this.props.onLogOut} >Log Out</Button>
            ]
            )}

        </div>
        )
    }


}

export default NavBar