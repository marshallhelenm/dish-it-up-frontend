import React, { Component } from "react";
import { Button, Icon, Item, Divider } from "semantic-ui-react";
import RecipeModal from "./RecipeModal";

const BASE_URL = "http://localhost:3000/";

class RecipeCard extends Component {
  constructor() {
    super();
    this.state = {
      saved: false
    };
  }

  componentDidMount() {
    this.setState({
      saved: this.props.saved
    });
  }

  saveRecipe = e => {
    if (this.state.saved === false) {
      this.setState({
        saved: true
      });
      console.log("saving: ", this.props.recipe);
      fetch(`${BASE_URL}saverecipe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          recipe: this.props.recipe,
          user_id: localStorage.getItem("user_id")
        })
      });
    }
  };

  showModal = () => {
    console.log("clicking");
    return <RecipeModal recipe={this.props.recipe} />;
  };

  // <RecipeModal recipe={this.props.recipe}/>

  // componentDidMount = () =>{
  //     this.props.onMountFinishProgress()
  // }

  render() {
    let { title, link, img, madeBy, description } = this.props.recipe;
    return (
      // <div id='recipe-card' >
      <>
        <Item id="recipe-card">
          <Item.Image
            className="recipe-photo"
            size="medium"
            src={img}
            akt="recipe photo"
            onClick={this.showModal}
          />
          <Item.Content>
            <Item.Header>{title}</Item.Header>
            <Item.Extra as="a" href={link}>
              Created By: {madeBy}
            </Item.Extra>
            <Item.Description>{description}</Item.Description>
            <Item.Extra>
            {this.props.saved === false ? (<Button icon onClick={this.saveRecipe}>
                <Icon name={this.state.saved ? "heart" : "heart outline"} />
              </Button>) : null}
              <RecipeModal
                saved={this.state.saved}
                recipe={this.props.recipe}
                onSaveRecipe={this.saveRecipe}
              />
            </Item.Extra>
          </Item.Content>
        </Item>
        {/* <Divider /> */}
      </>
    );
  }
}

export default RecipeCard;
