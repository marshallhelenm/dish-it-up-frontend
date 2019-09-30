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

  showModal = () => {
    return <RecipeModal />;
  };

  parseList = arrayToBeParsed => {
    if (arrayToBeParsed === null){
      return console.log('nothing to be parsed')
    }
    return arrayToBeParsed.map(item => <li>{item}</li>);
  };

  render() {
    let {
      title,
      link,
      img,
      prepTime,
      nutrition,
      directions,
      madeBy,
      servingSize,
      description,
      ingredients
    } = this.props.recipe;
    return (
      <div id="recipe-card">
        <img onClick={this.showModal()} src={img} alt={title} />
        <h2>
          <a href={link}>{title}</a>
        </h2>
        <div>
          <p>Created By: {madeBy}</p>
          <p>Description: {description}</p>
          <p>Preparation Time: {prepTime}</p>
          <p>Serving Size: {servingSize}</p>
        </div>
        <div>Nutrition: {nutrition}</div>
        <div>
          <h2> Ingredients List </h2>
          <ul>{this.parseList(ingredients)}</ul>
        </div>
        <div>
          <h2> Directions List </h2>
          <ol>{this.parseList(directions)}</ol>
        </div>
        <Button icon onClick={this.saveRecipe}>
          <Icon name="heart outline" />
        </Button>
      </div>
    );
  }
}

export default RecipeCard;
