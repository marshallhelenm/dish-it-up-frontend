import React, { Component } from 'react'
import Logo from '../components/Logo'
import { Button, Form } from 'semantic-ui-react'


class LoginPage extends Component {

    constructor () {
        super()
        this.state = {
            username: ''
        }
    }

    handleLogIn = () => {
        let username = this.state.username
        this.props.onLogIn(username)
    }

    handleOnChange = (e) => {
        console.log(e.target.value)
        let newUsername = e.target.value
        this.setState((prevState) => ({
            username: newUsername
        }))
    }

    render(){

        return( 
        <div>
            <Logo />
            LoginPage
            <Form onSubmit={this.handleLogIn} >
                <Form.Field>
                    <input id='username' placeholder='Username' value={this.state.username} onChange={this.handleOnChange} />
                </Form.Field>
                <Button type='submit' >Submit</Button>
            </Form>
        </div>
        )
    }


}

export default LoginPage