import React, { Component } from "react";
import { Label, Button, Header, Icon, Image, Modal, Popup, Checkbox } from "semantic-ui-react";
import SaveButton from './SaveButton'

const BASE_URL = "https://dish-backend.herokuapp.com/";

class RecipeModal extends Component {
  constructor(){
    super()
    this.state ={
      addIngredient: ""
    }
  }

  cartButton = (name) => {
    return (
      <Button onClick={this.addToCart} animated as='div' labelPosition="right">
        <Button.Content color='olive' visible> 
        <Label as='a' color='white' >
        {name}
        </Label> 
        </Button.Content>
        <Button.Content hidden><Icon id={name} label="To Cart" color="green" name='shopping cart'/> To Cart</Button.Content>
      </Button>
    );
  };

  

  // PopupExample = () => (
  //   <Popup content='Add to Cart' trigger={<Button icon='shopping cart' />} />
  // )

  addToCart = (e) => {
    console.log("addin to cart!!");
    try {
      let item1 = e.target.firstElementChild.id
      this.setState(({
        addIngredient: item1
      }), () => this.newCartItem())
    }
    catch(err) {
      let item2 = e.target.id
      this.setState(({
        addIngredient: item2
      }), () => this.newCartItem())
    }
  };

  newCartItem = () => {
    fetch(`${BASE_URL}addtocart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: localStorage.getItem("user_id"),
        itemName: this.state.addIngredient
      })
    })
      .then(response => response.json())
      .then(cart => console.log(cart));
  }

  parseListIngredients = arrayToBeParsed => {
    if (arrayToBeParsed === null || arrayToBeParsed === []) {
      return console.log("nothing to be parsed");
    }
    return arrayToBeParsed.map(item => {
      if (item.name) {
        return (
          <li>
            <Checkbox/>
            {this.cartButton(item.name)}
            {/* {item.name} */}
          </li>
        );
      } else {
        return (<li>
            <Checkbox/>
            {this.cartButton(item)}
            {/* {item.name} */}
          </li>)
      }
    });
  };

  parseListDirections = arrayToBeParsed => {
    if (arrayToBeParsed === null || arrayToBeParsed === []) {
      return console.log("nothing to be parsed");
    }
    return arrayToBeParsed.map(item => {
      return (<li>{item}</li>)
      }
    )
  };




  render() {
    let {
      title,
      link,
      img,
      prepTime,
      nutrition,
      directions,
      madeBy,
      servingSize,
      description,
      ingredients,
      id
    } = this.props.recipe;

    return (
      <Modal
        size="large"
        trigger={<Button color="olive" >Recipe Info</Button>}
        centered={false}
        closeIcon
      key={'modal-'+id} >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content image scrolling>
          <Image size="large" src={img} wrapped />

          <Modal.Description>
            <Header>{title}</Header>
            <div>
              <p>{description}</p>
              <p><a href={link}>Created By: {madeBy}</a></p>
              <p>Description: {description}</p>
              <p>Preparation Time: {prepTime}</p>
              <p>Serving Size: {servingSize}</p>
            </div>
            <div>Nutrition: {nutrition}</div>
            <div>
              <h2> Ingredients List </h2>
              <ul>{this.parseListIngredients(ingredients)}</ul>
            </div>
            <div>
              <h2> Directions List </h2>
              <ol>{this.parseListDirections(directions)}</ol>
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <SaveButton onSaveRecipe={this.props.onSaveRecipe} saved={this.props.saved} />
          {/* <Button primary>
            Save with Tags <Icon name="chevron right" />
          </Button> */}
        </Modal.Actions>
      </Modal>
    );
  }
}

export default RecipeModal;
