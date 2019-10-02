import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import NavDrop from "./NavDrop";
import BasicSearch from "../components/BasicSearch";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogOut = e => {
    this.props.onLogOut()
    this.handleItemClick(e, 'logout')
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu color="orange" stackable>
          <Menu.Item
          as={Link}
          to="/">
            
            <img src="https://image.freepik.com/free-vector/cartoon-chef-show-ok_61878-753.jpg" />
            <h2>Dish It Up</h2>
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/"
            name="Dashboard"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/recipes"
            name="My Recipes"
            onClick={this.handleItemClick}
          />
          {/* <Menu.Item
            name='My Pantry'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Shopping List'
            onClick={this.handleItemClick}
          /> */}

          <Menu.Menu position="right">
            <Menu.Item
              name="search"
              onClick={this.handleItemClick}
              position="right"
              onChange={this.handleOnChange}
            >
              <BasicSearch
                history={this.props.history}
                onRecipeInput={this.props.onRecipeInput}
                redirect={true}
              />
            </Menu.Item>

            <Menu.Item name="navigate" onClick={this.handleItemClick}>
              {<NavDrop />}
            </Menu.Item>

            <Menu.Item name="logout" onClick={this.handleLogOut} />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
