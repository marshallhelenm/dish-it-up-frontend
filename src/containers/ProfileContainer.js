import React, { Component } from "react";
import ProfilePhoto from "../components/ProfilePhoto";
import PhotoForm from "./PhotoForm";
const BASE_URL = "https://dish-backend.herokuapp.com/";

class ProfileContainer extends Component {
  constructor() {
    super();
    this.state = {
      uploading: false,
      username: "",
      img_url:
        "https://cdn.pixabay.com/photo/2017/07/18/17/16/black-2516434_1280.jpg"
    };
  }

  updatePhoto = url => {
      this.setState({
          img_url: url
      })
  }

  userInfo = () => {
    fetch(`${BASE_URL}user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: localStorage.getItem("user_id")
      })
    })
      .then(response => response.json())
      .then(user => {
        console.log("user: ", user);
        this.setState({
          uploading: false,
          username: user.username,
          img_url: user.img_url
        });
      });
  };

  componentDidMount() {
    this.userInfo();
  }

  handleClickPhoto = () => {
    console.log("click");
    let up = !this.state.uploading;
    this.setState({
      uploading: up
    });
  };

  render() {
    return (
      <div id="profile-container">
        <ProfilePhoto
          img_url={this.state.img_url}
          handleClickPhoto={this.handleClickPhoto}
        />
        <h2>{this.state.username}</h2>
        {this.state.uploading ? (
          <PhotoForm updatePhoto={this.updatePhoto} />
        ) : null}
      </div>
    );
  }
}

export default ProfileContainer;
