import React, { Component } from "react";
import PantryForm from "./PantryForm";
import {Icon,Label,Button,Segment,Checkbox,Grid} from 'semantic-ui-react'


const BASE_URL = "http://localhost:3000/";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: [],
      toDelete: []
    };
  }

  changeToDelete = (e) =>{
    console.log(e.target.innerText)
    let filtered = this.state.toDelete.filter((item) => item === e.target.innerText)
    filtered.length == 0? this.setState({
      toDelete: [...this.state.toDelete, e.target.innerText]
    })
    :
    this.deleteItem(e.target.innerText) 
  }

  deleteItem = (deleteItem) =>{
    let filter = this.state.toDelete.filter((item) => item !== deleteItem)
    this.setState({
      toDelete: filter
    })
  }

  parseList = arrayToBeParsed => {
    if (arrayToBeParsed === null || arrayToBeParsed === []) {
      return console.log("nothing to be parsed");
    }
    return arrayToBeParsed.map(item => {
      return <p>
      <Segment compact>
      <Checkbox onChange={this.changeToDelete} value={item.name ? item.name : item} label={item.name ? item.name : item}/>
      </Segment>
    </p>;
    });
  };

  checkItem = (itemName) =>{
    let filtered = this.state.ingredients.filter((element) => element.toLowerCase() === itemName.toLowerCase())
    filtered.length == 0? this.newItem((itemName.toUpperCase().charAt(0) + itemName.slice(1,itemName.length))) : alert("You already have this item in your cart.")
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
        this.setState((prevState) => ({
          ...prevState,
          ingredients: ingredients
        }));
      });
  }

  deleteItems = () =>{
    console.log(this.state.toDelete)
    fetch(`${BASE_URL}delete`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        deleteItems: this.state.toDelete,
        user_id: localStorage.getItem("user_id")
      })
      })
      .then(response => response.json())
      .then(myIngredients => {console.log("ingredients after DELETION ", myIngredients);
      this.setState((prevState) => ({
        ...prevState,
        ingredients: myIngredients,
        toDelete: []
      }));
    })
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
        this.setState((prevState) => ({
          ...prevState,
          ingredients: ingredients
        }));
      });
  }

  render() {
    return (
      <div id="Cart">
      <Segment>
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
          <h1>Ingredients in Your Cart:</h1>
          <h4>Select Items to be Deleted</h4>
        <div>
          {this.parseList(this.state.ingredients)}
        </div>
        </Grid.Column>
        <Grid.Column>
          <PantryForm word="Cart" handleNewItem={this.checkItem} />
          <Button labelPosition="right">
              <Button onClick={this.deleteItems} color='red'>
              <Icon name='delete' />
                Delete Selected
              </Button>
              <Label basic color='red' pointing='left'>
                {this.state.toDelete.length}
              </Label>
          </Button>
        </Grid.Column>
      </Grid>
      </Segment>
      </div>
    );
  }
}

export default Cart;
