import React, { Component } from 'react'

class RecipeCard extends Component {
    render(){
        let { title, link, img, prepTime, nutrition, description, ingredients } = this.props.recipe
        return( 
        <div id='recipe-card' >
            <img src={img} alt='recipe photo'/>
            <h2><a href={link}>{title}</a></h2>
            <div>
                {prepTime}
            </div>
            <div>
                {nutrition}
            </div>
            <div>
                {description} 
                {/* this is currently an array - we need logic to split and display properly */}
            </div>
            <div>
                {ingredients}
                {/* this is currently an array - we need logic to split and display properly */}
            </div>
            Recipe Info goes here!
        </div>
        )
    }


}

export default RecipeCard