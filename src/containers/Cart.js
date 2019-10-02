import React, { Component } from "react";
import PantryForm from "./PantryForm";
import {Segment,Checkbox} from 'semantic-ui-react'

const BASE_URL = "http://localhost:3000/";

class Cart extends Component {
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
      return <p>
      <Segment compact>
      <Checkbox label={item.name ? item.name : item}/>
      </Segment>
    </p>;
    });
  };

  checkItem = (itemName) =>{
    let filtered = this.state.ingredients.filter((element) => element.toLowerCase() === itemName.toLowerCase())
    filtered.empty? this.newItem(itemName) : alert("You already have this item in your cart.")
  }

  newItem = (itemName) => {
    fetch(`${BASE_URL}addtocart`, {
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
    fetch(`${BASE_URL}cart`, {
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
      <div id="Cart">
        <PantryForm word="Cart" handleNewItem={this.checkItem} />
        <h1>Items in Your Cart:</h1>
        {this.parseList(this.state.ingredients)}
      </div>
    );
  }
}

export default Cart;
