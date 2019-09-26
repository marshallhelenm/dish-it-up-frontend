import React, { Component } from 'react'

class RecipeContainer extends Component {

    createRecipeCards= () => {
        console.log('creating recipe cards')
        
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