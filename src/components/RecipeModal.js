import React, { Component } from "react";
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";
import SaveButton from './SaveButton'

class RecipeModal extends Component {
  cartButton = () => {
    return (
      <Button icon>
        <Icon name="shopping cart" />
      </Button>
    );
  };

  addToCart = () => {
    console.log("addin to cart!!");
  };

  parseList = arrayToBeParsed => {
    if (arrayToBeParsed === null || arrayToBeParsed === []) {
      return console.log("nothing to be parsed");
    }
    return arrayToBeParsed.map(item => {
      if (item.name) {
        return (
          <li>
            {this.cartButton()}
            {item.name}
          </li>
        );
      } else {
        return <li>{item}</li>;
      }
    });
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
        trigger={<Button>Recipe Info</Button>}
        centered={false}
        closeIcon
      key={'modal-'+id} >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content image scrolling>
          <Image size="large" src={img} wrapped />

          <Modal.Description>
            <Header>Modal Header</Header>
            <div>
              <p><a href={link}>Created By: {madeBy}</a></p>
              <p>Description: {description}</p>
              <p>Preparation Time: {prepTime}</p>
              <p>Serving Size: {servingSize}</p>
            </div>
            <div>Nutrition: {nutrition}</div>
            <div>
              <h2> Ingredients List </h2>
              <ul>{this.parseList(ingredients)}</ul>
            </div>
            <div>
              <h2> Directions List </h2>
              <ol>{this.parseList(directions)}</ol>
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
