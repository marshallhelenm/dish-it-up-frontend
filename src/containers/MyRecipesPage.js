import React, { Component } from "react";
import RecipeContainer from "./RecipeContainer";
import ProfileContainer from "./ProfileContainer";

const BASE_URL = "http://localhost:3000/";

class MyRecipesPage extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }
  componentDidMount() {
    console.log("fetching my recipes");
    fetch(`${BASE_URL}myrecipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: localStorage.getItem('user_id')
      })
    })
      .then(response => response.json())
      .then(myrecipes => {
        console.log("myrecipes in fetch: ", myrecipes);
        this.setState({
          recipes: myrecipes
        });
      });
  }

  render() {
    console.log("myrecipes: ", this.state.recipes);
    return (
      <div>
        <ProfileContainer currentUser={localStorage.getItem('user_id')} />
        <RecipeContainer recipes={this.state.recipes} />
      </div>
    );
  }
}

export default MyRecipesPage;
