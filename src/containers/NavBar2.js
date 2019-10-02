import React, { Component } from "react";
import { Menu, Form, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import NavDrop from "./NavDrop";

export default class NavBar extends Component {
  state = { activeItem: "home", searchTerm: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleOnChange = e => {
    // console.log(e.target.value)
    let newSearch = e.target.value;
    this.setState(prevState => ({
      searchTerm: newSearch
    }));
    
  };

  handleSearch = e => {
    console.log("searching from navbar");
    e.preventDefault();
    let searchTerm = this.state.searchTerm;
    this.props.onRecipeInput("byText", searchTerm);
    // this.props.onLoading()
    this.props.history.push("/search");
    e.target.value = "";
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu color="orange" stackable>
          <Menu.Item>
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
              {/* turn this into a form? */}
              <Form onSubmit={this.handleSearch}>
                <Input
                  className="icon"
                  icon="search"
                  placeholder="Quick Recipe Search"
                />
              </Form>
            </Menu.Item>

            <Menu.Item name="navigate" onClick={this.handleItemClick}>
              {<NavDrop />}
            </Menu.Item>

            <Menu.Item name="logout" onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
