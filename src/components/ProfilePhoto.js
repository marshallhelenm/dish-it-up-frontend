import React, { Component } from "react";
import { Image, Reveal, Button } from "semantic-ui-react";

class ProfilePhoto extends Component {



  render() {
    return (
      <Reveal animated="fade">
        <Reveal.Content visible>
          <Image onClick={this.props.handleClickPhoto}
            src={this.props.img_url ? this.props.img_url : 'https://cdn.pixabay.com/photo/2017/07/18/17/16/black-2516434_1280.jpg'}
            size="medium"
            circular
          />
        </Reveal.Content>
        <Reveal.Content hidden>
        <Button id='upload-btn' circular size='massive'  >Upload Photo</Button>
        </Reveal.Content>
      </Reveal>
    );
  }
}

export default ProfilePhoto;
