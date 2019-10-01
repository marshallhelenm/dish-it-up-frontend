import React, { Component } from 'react'
import RecipeCard from '../components/RecipeCard'

class RecipeContainer extends Component {

    createRecipeCards= () => {
        console.log('creating recipe cards', this.props.recipes)
        if (this.props.recipes === undefined || this.props.recipes === []){
            return
        }
        console.log('recipes: ', this.props.recipes)
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