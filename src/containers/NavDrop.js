import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

class NavDrop extends Component {
  render() {
    return (
      <div >
        <Dropdown item text="Navigate">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} text="Dashboard" to="/" />
            <Dropdown.Item as={Link} text="Pantry" to="/pantry" />
            <Dropdown.Item as={Link} text="Shopping Cart" to="/cart" />
            <Dropdown.Item as={Link} text="My Recipes" to="/recipes" />
            <Dropdown.Item as={Link} text="Search Recipes" to="/search" />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default NavDrop;
