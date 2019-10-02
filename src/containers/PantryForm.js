import React, { Component } from "react";
import { Form, Button } from 'semantic-ui-react'
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
        <Form onSubmit={this.handleOnItemSubmit}>
        <Form.Input label='Add an Item' width={8} type='text' placeholder="Item to Add"onChange={this.handleOnChange}
            value={this.state.itemName}/>
          
          <Form.Button type="submit" inverted color='orange'>Add to {this.props.word}</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PantryForm;
