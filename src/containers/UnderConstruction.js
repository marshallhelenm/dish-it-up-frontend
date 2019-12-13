import React, { Component } from 'react'
import {Segment} from 'semantic-ui-react'


export default class UnderConstruction extends Component {
    render(){

        return( 
        <div>
            <Segment color="yellow" raised>
            <h1>Sorry, Dish it Up is under construction! It will be back after some modifications.</h1>
            <h3>For a brief demo video, click <a href='https://www.loom.com/share/4473e97dd4b64107b6b9874d57777ef0'>here.</a></h3>
            </Segment>
        </div>
        )
    }


}
