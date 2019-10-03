import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";
import {Link} from 'react-router-dom'

class RecipesHeader extends Component {
  render() {
    return (
      <a href='/recipes' id="recipes-header">
        <Header as="h2" icon textAlign="center">
          <Icon color="yellow" name="book" circular />
          <Header.Content>{this.props.title}</Header.Content>
        </Header>
      </a>
    );
  }
}

export default RecipesHeader;
