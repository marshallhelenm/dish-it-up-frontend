import React, { Component } from "react";
import RecipeContainer from "./RecipeContainer";
import PrivacyHOC from "../HOC/PrivacyHOC";
import {Input} from "semantic-ui-react"

const BASE_URL = "http://localhost:3000/";

class Cookbook extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      searchTerm: ""
    };
  }
  componentDidMount() {
    console.log("fetching my recipes");
    fetch(`${BASE_URL}mycookbook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: localStorage.getItem("user_id")
      })
    })
      .then(response => response.json())
      .then(mycookbook => {
        console.log("mycookbook in fetch: ", mycookbook);
        this.setState({
          recipes: mycookbook
        });
      });
  }

  ifNoRecipes = () => {
    return this.state.recipes.length === 0? <div style={{display: 'flex', justifyContent: 'center'}}><p>You have no recipes yet, add some through the search bar above!</p></div> : null
  }

  // handleOnChange = (e) =>{
  //   console.log(e.target.value)
  //   this.setState({
  //     searchTerm: e.target.value
  //   }, () => this.filterIngredients())
  // }

  // filterRecipes = (term) =>{
  //   let recipes = this.state.recipes
  
  //   if (this.state.searchTerm === "") {
  //     this.setState((prevState) => ({
  //       ...prevState,
  //       filtered: recipes
  //     }))

  //   } else {
  //   let filtered = recipes.filter((recipe) => recipe.title.toLowerCase().includes(this.state.searchTerm) == true)

  //   this.setState((prevState) => ({
  //     ...prevState,
  //     filtered: filtered
  //   }))
  // }
  // }

  render() {
    console.log("mycookbook: ", this.state.recipes);
    return (
      <div>
         {/* <Input 
          onChange={this.handleOnChange}
          value={this.searchTerm}
          icon={{ name: 'search', color: 'olive', circular: true, link: true }}
          placeholder='Search by Keyword'
           /> */}
        <RecipeContainer onShow={true} recipes={this.state.recipes} saved={true} page='Cookbook' />

        {/* <ProfileContainer currentUser={localStorage.getItem("user_id")} /> */
          this.ifNoRecipes()
        }
      </div>
    );
  }
}

export default PrivacyHOC(Cookbook);
