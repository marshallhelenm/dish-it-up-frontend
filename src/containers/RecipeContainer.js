import React, { Component } from 'react'
import RecipeCard from '../components/RecipeCard'

class RecipeContainer extends Component {

    createRecipeCards= () => {
        console.log('creating recipe cards', this.props.recipes)
        if (this.props.recipes === undefined){
            return
        }
        return this.props.recipes.map((recipe, index) => {
            return <RecipeCard recipe={recipe} key={index} />
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