import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class ButtonContainer extends Component {

    render(){

        return( 
        <div id='button-container' >
            <Button inverted color='orange' as={Link} to="/pantry" >Pantry</Button>
            <Button inverted color='orange' as={Link} to='/cart'>Cart</Button>
            <Button inverted color='orange' as={Link} to='/recipes'>CookBook</Button>
            <Button inverted color='orange' as={Link} to='/search'>Search Recipes</Button>
        </div>
        )
    }

}

export default ButtonContainer