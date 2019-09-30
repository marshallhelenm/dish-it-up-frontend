import React, { Component } from 'react'
import ProfilePhoto from '../components/ProfilePhoto'

const BASE_URL = "http://localhost:3000/";

class Pantry extends Component {

    render(){
        return( 
        <div id='Pantry' >
            <ProfilePhoto />
            <h1>Ingredients listed here</h1>

        </div>
        )
    }


}

export default Pantry