import React, { Component } from "react";
import RecipeCard from "../components/RecipeCard";
import { Item } from "semantic-ui-react";

class RecipeContainer extends Component {
  createRecipeCards = () => {
    console.log("creating recipe cards", this.props.recipes);
    if (this.props.recipes === undefined || this.props.recipes === []) {
      return;
    }
    console.log("recipes: ", this.props.recipes);
    return this.props.recipes.map((recipe, index) => {
      return (
        <RecipeCard
          recipe={recipe}
          onMountFinishProgress={this.props.onMountFinishProgress}
          key={index}
          saved={this.props.saved}
        />
      );
    });
    // () => {this.onMountFinishProgress()}
  };

  render() {
    return (
      <div>
        Recipes are listed here
        <ul>
          <Item.Group>{this.createRecipeCards()}</Item.Group>
        </ul>
      </div>
    );
  }
}

export default RecipeContainer;
