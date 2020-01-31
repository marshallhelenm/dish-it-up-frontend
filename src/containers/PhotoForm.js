import React from "react";
import { Form, Input, Icon, Label, Button } from "semantic-ui-react";
const BASE_URL = "https://dish-backend.herokuapp.com/";

class PhotoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      url: ""
    };
  }

  handleOnChange = e => {
    console.log(e.target.value);
    let changedURL = e.target.value;
    this.setState({
      url: changedURL
    });
  };

  handleOnURLSubmit = e => {
    e.preventDefault();
    let url = this.state.url;
    fetch(`${BASE_URL}user/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: localStorage.getItem("user_id"),
        url: this.state.url
      })
    })
    .then(response => response.json())
    .then(user => {
        console.log('user in fetch: ', user)
        console.log('url in fetch: ', user.img_url)
        this.props.updatePhoto(user.img_url)
    })
  };

  render() {
    return (
      <div id="photo-form">
        <Form onSubmit={this.handleOnURLSubmit}>
          <Form.Group>
            <Form.Field>
              <input
                placeholder="Image URL"
                onChange={e => this.handleOnChange(e)}
                value={this.state.url}
              />
            </Form.Field>
            <Form.Button inverted color="olive">
              Submit
            </Form.Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default PhotoForm;
