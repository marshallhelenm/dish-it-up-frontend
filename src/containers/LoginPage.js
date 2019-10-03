import React, { Component } from 'react'
import { Button, Segment, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class LoginPage extends Component {

    constructor () {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLogIn = () => {
        let username = this.state.username
        this.props.onLogIn(this.state)
    }

    handleOnUsernameChange = (e) => {
        console.log(e.target.value)
        let newUsername = e.target.value
        this.setState((prevState) => ({
            ...prevState,
            username: newUsername
        }))
    }

    handleOnPasswordChange = (e) => {
        console.log(e.target.value)
        let newPassword = e.target.value
        this.setState((prevState) => ({
            ...prevState,
            password: newPassword
        }))
    }

    render(){

        return( 
        <div>
            <Segment color="yellow" raised>
            <h1>Login Page</h1>
            <Form onSubmit={this.handleLogIn} >
                    <Form.Field>
                    <label>Username</label>
                    <input id='username' placeholder='Username' value={this.state.username} onChange={this.handleOnUsernameChange} />
                    <label>Password</label>
                    <input id='password' placeholder='Password' type='password' value={this.state.password} onChange={this.handleOnPasswordChange} />
            
                    </Form.Field>
                <Button type='submit' inverted color="olive">Submit</Button>
            </Form>
            <Link to="/signup">
                <Button inverted color="orange">Signup Here</Button>
            </Link>
            </Segment>
        </div>
        )
    }


}

export default LoginPage