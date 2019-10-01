import React, { Component } from "react";
// import { Button } from 'semantic-ui-react'
const BASE_URL = "http://localhost:3000/";

class PantryForm extends Component {
  constructor() {
    super();
    this.state = {
      itemName: ""
    };
  }

  handleOnChange = e => {
    // console.log(e.target.value)
    let newItem = e.target.value;
    this.setState(prevState => ({
      itemName: newItem
    }));
  };

  handleOnItemSubmit = e => {
    e.preventDefault();
    let itemName = this.state.itemName;
    this.props.handleNewItem(itemName)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnItemSubmit}>
          <input
            onChange={this.handleOnChange}
            value={this.state.itemName}
            type="text"
          />
          <button>Add to {this.props.word}</button>
        </form>
      </div>
    );
  }
}

export default PantryForm;
