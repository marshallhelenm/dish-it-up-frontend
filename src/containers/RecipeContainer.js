import React, { Component } from 'react'
import RecipeCard from '../components/RecipeCard'

class RecipeContainer extends Component {

    createRecipeCards= () => {
        
        if (this.props.recipes === undefined){
            return
        }
        return this.props.recipes.map((recipe, index) => {
            return <RecipeCard recipe={recipe} onMountFinishProgress={this.props.onMountFinishProgress} key={index} />
        })
    }

    render(){

        return(
            <div>
                Recipes are listed here
                <ul>
                    {this.createRecipeCards()}
                </ul>
            </div>
        )
    }


}

export default RecipeContainer