import React, { Component } from "react";
import { Button, Icon, Popup } from "semantic-ui-react";

class RecipesHeader extends Component {
  render() {
    return (
      <>
        <Popup
          content="Save to Cookbook"
          trigger={
            <Button icon onClick={this.props.onSaveRecipe}>
              <Icon name={this.props.saved ? "heart" : "heart outline"} />
            </Button>
          }
        />
      </>
    );
  }
}

export default RecipesHeader;
