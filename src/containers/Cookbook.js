import React, { Component } from "react";
import RecipeContainer from "./RecipeContainer";
import PrivacyHOC from "../HOC/PrivacyHOC";
import { Input } from "semantic-ui-react";

const BASE_URL = "https://dish-backend.herokuapp.com/";

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
        <RecipeContainer
          onShow={true}
          recipes={this.state.recipes}
          saved={true}
          page="Cookbook"
        />
      </div>
    );
  }
}

export default PrivacyHOC(Cookbook);
