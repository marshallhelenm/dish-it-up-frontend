import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import RecipeModal from "./RecipeModal";

const BASE_URL = "http://localhost:3000/";

class RecipeCard extends Component {
  saveRecipe = () => {
    console.log("saving: ", this.props.recipe);
    fetch(`${BASE_URL}saverecipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        recipe: this.props.recipe,
        user_id: localStorage.getItem('user_id')
      })
    })
      .then(console.log('need to make a pop up that says saved that only stays for a second or two. that or change the button to be a full heart.'))
    };

        showModal = () =>{
            console.log("clicking")
            return (<RecipeModal/>)
        }


    componentWillMount = () =>{
        this.props.onMountFinishProgress()
    }

    render(){
        let { title, link, img, madeBy, description } = this.props.recipe
        return( 
        <div id='recipe-card' >
            <img onClick={this.showModal} src={img} alt='recipe photo'/>
            <RecipeModal recipe={this.props.recipe}/>
            <h2><a href={link}>{title}</a></h2>
            <div>
                <p>Description: {description}</p>
                <p>Created By: {madeBy}</p>
            </div>
            <Button icon>
                <Icon name='shopping cart' />
            </Button>
        <Button icon onClick={this.saveRecipe}>
          <Icon name="heart outline" />
        </Button>
        </div>
    );
  }
}

export default RecipeCard;
