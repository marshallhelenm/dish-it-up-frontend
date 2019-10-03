import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";

class RecipesHeader extends Component {
  render() {
    return (
      <div id="recipes-header">
        <Header as="h2" icon textAlign="center">
          <Icon color="yellow" name="book" circular />
          <Header.Content>{this.props.title}</Header.Content>
        </Header>
      </div>
    );
  }
}

export default RecipesHeader;
