import React, { Component } from 'react'
import RecipeContainer from './RecipeContainer'
import ProfileContainer from './ProfileContainer'

class MyRecipesPage extends Component {


    render(){

        return <div>
            <ProfileContainer currentUser={this.props.currentUser} />
            <RecipeContainer recipes={this.props.currentUser.recipes} />
        </div>
    }


}

export default MyRecipesPage



