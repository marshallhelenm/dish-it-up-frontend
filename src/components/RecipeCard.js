import React, { Component } from 'react'
import RecipeModal from './RecipeModal'

class RecipeCard extends Component {

    showModal = () =>{
        return <RecipeModal/>
    }

    parseList = (arrayToBeParsed) =>{
        return arrayToBeParsed.map(item => <li>{item}</li>)
    }

    render(){
        let { title, link, img, prepTime, nutrition, directions, madeBy, servingSize, description, ingredients } = this.props.recipe
        return( 
        <div id='recipe-card' >
            <img onClick={this.showModal()} src={img} alt='recipe photo'/>
            <h2><a href={link}>{title}</a></h2>
            <div>
                <p>Created By: {madeBy}</p>
                <p>Description: {description}</p>
                <p>Preparation Time: {prepTime}</p>
                <p>Serving Size: {servingSize}</p>
            </div>
            <div>
                Nutrition: {nutrition}
            </div>
            <div>
                <h2> Ingredients List </h2>
                <ul>
                {this.parseList(ingredients)}
                {/* this is currently an array - we need logic to split and display properly */}
                </ul>
            </div>
            <div>
                <h2> Directions List </h2>
                <ol>
                {this.parseList(directions)} 
                {/* this is currently an array - we need logic to split and display properly */}
                </ol>
            </div>
        </div>
        )
    }
}

export default RecipeCard