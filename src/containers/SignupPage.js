import React, { Component } from 'react'
import { Segment,Button, Form } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class SignupPage extends Component {

    constructor () {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSignup = () => {
        let username = this.state.username
        this.props.onSignup(this.state)
        this.props.history.push("/")
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
            <Segment color="olive" raised>
            <h1>Signup Page</h1>
            <Form onSubmit={this.handleSignup} >
                <Form.Field>
                    <label>Username</label>
                    <input id='username' placeholder='Username' value={this.state.username} onChange={this.handleOnUsernameChange} />
                    <label>Password</label>
                    <input id='password' placeholder='Password' value={this.state.password} onChange={this.handleOnPasswordChange} />

                </Form.Field>

                <Button inverted color="olive" type='submit' >Submit</Button>
            </Form>
            <Link to="/">
                <Button inverted color="orange">Back to Login</Button>
            </Link>
            </Segment>
        </div>
        )
    }


}

export default SignupPage