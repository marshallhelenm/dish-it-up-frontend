import React, { Component } from 'react'
import RecipeModal from './RecipeModal'

class RecipeCard extends Component {

    showModal = () =>{
        console.log("clicking")
        return (<RecipeModal/>)
    }

    parseList = (arrayToBeParsed) =>{
        return arrayToBeParsed.map(item => <li>{item}</li>)
    }

    render(){
        let { title, link, img, madeBy, description } = this.props.recipe
        return( 
        <div id='recipe-card' >
            <img onClick={this.showModal} src={img} alt='recipe photo'/>
            <RecipeModal key={this.props.key} recipe={this.props.recipe}/>
            <h2><a href={link}>{title}</a></h2>
            <div>
                <p>Description: {description}</p>
                <p>Created By: {madeBy}</p>
            </div>
        </div>
        )
    }
}

export default RecipeCard