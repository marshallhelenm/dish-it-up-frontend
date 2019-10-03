import React, { Component } from "react";
import RecipeContainer from "./RecipeContainer";
import PrivacyHOC from "../HOC/PrivacyHOC";

const BASE_URL = "http://localhost:3000/";

class Cookbook extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
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

  render() {
    console.log("mycookbook: ", this.state.recipes);
    return (
      <div>
        <RecipeContainer onShow={true} recipes={this.state.recipes} saved={true} page='Cookbook' />
        {/* <ProfileContainer currentUser={localStorage.getItem("user_id")} /> */
          this.ifNoRecipes()
        }
      </div>
    );
  }
}

export default PrivacyHOC(Cookbook);
