import React, { Component } from "react";
import { Form, Input, Icon } from "semantic-ui-react";

// import { Button } from 'semantic-ui-react'

class BasicSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleOnChange = e => {
    // console.log(e.target.value)
    let newSearch = e.target.value;
    this.setState(prevState => ({
      searchTerm: newSearch
    }));
  };


  handleSearch = e => {
    console.log("searching");
    e.preventDefault();
    let searchTerm = this.state.searchTerm;
    this.props.onRecipeInput("byText", searchTerm);
    // this.props.onLoading()
    if (this.props.redirect === true) {
      this.props.history.push("/search");
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSearch}>
        <Input
          onChange={this.handleOnChange}
          className="icon"
          icon={<Icon name='search' onClick={this.handleSearch} />}
          placeholder="Search Recipes"
        />
      </Form>
    );
  }
}

export default BasicSearch;
