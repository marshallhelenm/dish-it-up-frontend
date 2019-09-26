import React, { Component } from 'react'
import ProfilePhoto from '../components/ProfilePhoto'
import RecipeContainer from './RecipeContainer'

class Pantry extends Component {
    render(){

        return( 
        <div id='Pantry' >
            <ProfilePhoto />
            <RecipeContainer />

        </div>
        )
    }


}

export default Pantry