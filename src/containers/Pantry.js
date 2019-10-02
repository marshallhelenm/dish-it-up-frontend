import React, { Component } from "react";
import ProfilePhoto from "../components/ProfilePhoto";
import PantryForm from "./PantryForm";
import {Segment, Grid} from "semantic-ui-react"

const BASE_URL = "http://localhost:3000/";

class Pantry extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: []
    };
  }
  parseList = arrayToBeParsed => {
    if (arrayToBeParsed === null || arrayToBeParsed === []) {
      return console.log("nothing to be parsed");
    }
    return arrayToBeParsed.map(item => {
      return <li>{item.name ? item.name : item}</li>;
    });
  };

  checkItem = (itemName) =>{
    let filtered = this.state.ingredients.filter((element) => element.name.toLowerCase() === itemName.toLowerCase())
    filtered.length == 0? this.newItem((itemName.toUpperCase().charAt(0) + itemName.slice(1,itemName.length))) : alert("You already have this item in your cart.")
  }

  newItem = (itemName) => {
    fetch(`${BASE_URL}addtopantry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: localStorage.getItem("user_id"),
        itemName: itemName
      })
    })
      .then(response => response.json())
      .then(ingredients => {
        console.log("ingredients in fetch: ", ingredients);
        this.setState({
          ingredients: ingredients
        });
      });
  }

  componentDidMount() {
    console.log("fetching my ingredients");
    fetch(`${BASE_URL}pantry`, {
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
      .then(ingredients => {
        console.log("ingredients in fetch: ", ingredients);
        this.setState({
          ingredients: ingredients
        });
      });
  }

  render() {
    return (
      <div id="Pantry">
      <Segment>
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
          <h1>Ingredients in Your Pantry:</h1>
          {this.parseList(this.state.ingredients)}
        </Grid.Column>
        <Grid.Column>
          <ProfilePhoto />
          <PantryForm word="Pantry" handleNewItem={this.checkItem} />
        </Grid.Column>
      </Grid>
      </Segment>
      </div>
    );
  }
}

export default Pantry;
