import React, { Component } from "react";
import ProfilePhoto from "../components/ProfilePhoto";
import PantryForm from "./PantryForm";
import {Icon,Label,Button,Segment,Checkbox,Grid} from 'semantic-ui-react'
import PrivacyHOC from "../HOC/PrivacyHOC";

const BASE_URL = "http://localhost:3000/";

class Pantry extends Component {
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
      return <Segment compact>
        <Checkbox onChange={this.changeselectedItems} value={item.name ? item.name : item} label={item.name ? item.name : item}/> </Segment>

    });
  };

  deleteItems = () =>{
    console.log(this.state.selectedItems)
    fetch(`${BASE_URL}deletePantry`, {
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

  checkItem = (itemName) =>{
    let filtered = this.state.ingredients.filter((element) => element.name.toLowerCase() === itemName.toLowerCase())
    filtered.length == 0? this.newItem((itemName.toUpperCase().charAt(0) + itemName.slice(1,itemName.length))) : alert("You already have this item in your pantry.")
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

  toCartItems = (itemName) => {
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
      .then(ingredients => 
       this.deleteItems()
      );
  }

  render() {
    return (
      <div id="Pantry">
      <Segment>
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
          <h1>Ingredients in Your Pantry:</h1>
          <p>Your pantry is a digital representation of the supplies you have available for cooking use. Add items here and choose to also add them to your shopping cart when you need to restock!</p>
          <h4>Select Items:</h4>
          {this.parseList(this.state.ingredients)}
        </Grid.Column>
        <Grid.Column>
          <PantryForm word="Pantry" handleNewItem={this.checkItem} />
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
          <h4>Add Selected to Shopping List</h4>
          <Button as='div' labelPosition="right">
              <Button onClick={this.toCartItems} color='olive'>
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

export default PrivacyHOC(Pantry);
