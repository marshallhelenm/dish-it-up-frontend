import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class ButtonContainer extends Component {

    render(){

        return( 
        <div id='button-container' >
            Button Container
            <Button inverted color='orange' >CLICK ME</Button>
            <Button>CLICK ME</Button>
            <Button>CLICK ME</Button>
            <Button>CLICK ME</Button>
        </div>
        )
    }

}

export default ButtonContainer