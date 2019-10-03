import React, { Component } from "react";
import PantryForm from "./PantryForm";
import {Icon,Label,Button,Segment,Checkbox,Grid} from 'semantic-ui-react'
import PrivacyHOC from "../HOC/PrivacyHOC";


const BASE_URL = "http://localhost:3000/";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: [],
      selectedItems: []
    };
  }

  changeselectedItems = (e) =>{
    console.log(e.target.innerText)
    let filtered = this.state.selectedItems.filter((item) => item === e.target.innerText)
    filtered.length == 0? this.setState({
      selectedItems: [...this.state.selectedItems, e.target.innerText]
    })
    :
    this.deleteItem(e.target.innerText) 
  }

  deleteItem = (deleteItem) =>{
    let filter = this.state.selectedItems.filter((item) => item !== deleteItem)
    this.setState({
      selectedItems: filter
    })
  }

  parseList = arrayToBeParsed => {
    if (arrayToBeParsed === null || arrayToBeParsed === []) {
      return console.log("nothing to be parsed");
    }
    return arrayToBeParsed.map(item => {
      return <p>
      <Segment compact>
      <Checkbox onChange={this.changeselectedItems} value={item.name ? item.name : item} label={item.name ? item.name : item}/>
      </Segment>
    </p>;
    });
  };

  checkItem = (itemName) =>{
    let filtered = this.state.ingredients.filter((element) => element.toLowerCase() === itemName.toLowerCase())
    filtered.length == 0? this.newCartItem((itemName.toUpperCase().charAt(0) + itemName.slice(1,itemName.length))) : alert("You already have this item in your cart.")
  }

  newCartItem = (itemName) => {
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

  toPantryItems = () =>{
    fetch(`${BASE_URL}addtopantry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: localStorage.getItem("user_id"),
        itemName: this.state.selectedItems
      })
    })
      .then(response => response.json())
      .then(ingredients => this.deleteItems());
  }

  deleteItems = () =>{
    console.log(this.state.selectedItems)
    fetch(`${BASE_URL}delete`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        deleteItems: this.state.selectedItems,
        user_id: localStorage.getItem("user_id")
      })
      })
      .then(response => response.json())
      .then(myIngredients => {console.log("ingredients after DELETION ", myIngredients);
      this.setState((prevState) => ({
        ...prevState,
        ingredients: myIngredients,
        selectedItems: []
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

  ifNoCartItems = () => {
    return this.state.ingredients.length === 0? <div style={{display: 'flex', justifyContent: 'center'}}><p>You have no ingredients in your shopping list! Add to your list with the form on the right!</p></div> : null
  }

  render() {
    return (
      <div id="Cart">
      <Segment>
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
          <h1>Ingredients in Your Cart:</h1>
          <p>Your shopping cart is your online helper, when you've purchase an item, select it and send it to your pantry!</p>
          <h4>Select Items:</h4>
          {this.ifNoCartItems()}
        <div>
          {this.parseList(this.state.ingredients)}
        </div>
        </Grid.Column>
        <Grid.Column>
          <PantryForm word="Cart" handleNewItem={this.checkItem} />
          <h4>Delete Selected Items</h4>
          <Button as='div' labelPosition="right">
              <Button onClick={this.deleteItems} color='red'>
              <Icon name='trash alternate outline' />
                Delete Selected
              </Button>
              <Label as='a' basic color='red' pointing='left'>
                {this.state.selectedItems.length}
              </Label>
          </Button>
          <h4>Add Selected to Pantry</h4>
          <Button as='div' labelPosition="right">
              <Button onClick={this.toPantryItems} color='olive'>
              <Icon name='plus' />
                Add Selected
              </Button>
              <Label as='a' basic color='olive' pointing='left'>
                {this.state.selectedItems.length}
              </Label>
          </Button>
        </Grid.Column>
      </Grid>
      </Segment>
      </div>
    );
  }
}

export default PrivacyHOC(Cart);
