import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import NavDrop from "./NavDrop";
import BasicSearch from "../components/BasicSearch";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleLogOut = e => {
    this.props.onLogOut();
    this.handleItemClick(e, "logout");
  };

  render() {
    return (
      <div id='nav-bar'>
        <Menu color="orange" stackable>
            <img
              id="logo"
              src="https://www.trzcacak.rs/myfile/detail/288-2882308_chef-man-emoji-chef-woman-png-cartoon.png"
              alt="a happy chef"
            />
          <Menu.Item>
            <h2>Dish It Up!</h2>
          </Menu.Item>

  
          <Menu.Item as={Link} to="/">
              <Icon name='home' size='big' />
          </Menu.Item>
          {/* <Menu.Item as={Link} to="/" name="Dashboard" /> */}
          <Menu.Item as={Link} to="/recipes">
              <Icon name='book' size='big' />
          </Menu.Item>
          {/* <Menu.Item as={Link} to="/recipes" name="My Recipes" /> */}
          <Menu.Menu position="right">
            <Menu.Item
              name="search"
              position="right"
              onChange={this.handleOnChange}
            >
              <BasicSearch
                history={this.props.history}
                onRecipeInput={this.props.onRecipeInput}
                redirect={true}
              />
            </Menu.Item>

            <Menu.Item name="navigate">{<NavDrop />}</Menu.Item>

            <Menu.Item name="logout" onClick={this.handleLogOut} />
          </Menu.Menu>
          
        </Menu>
      </div>
    );
  }
}
