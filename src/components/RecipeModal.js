import _ from 'lodash'
import React, {Component} from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

class RecipeModal extends Component{

    parseList = (arrayToBeParsed) =>{
        return arrayToBeParsed.map(item => <li>{item}</li>)
    }

    render () {
        let { title, link, img, prepTime, nutrition, directions, madeBy, servingSize, description, ingredients } = this.props.recipe
        
    return (<Modal size='large' trigger={<Button>Recipe Info</Button>} centered={false} closeIcon>
    <Modal.Header>{title}</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='large' src={img} wrapped />

      <Modal.Description>
        <Header>Modal Header</Header>
        <div>
                <p>Created By: {madeBy}</p>
                <p>Description: {description}</p>
                <p>Preparation Time: {prepTime}</p>
                <p>Serving Size: {servingSize}</p>
            </div>
            <div>
                Nutrition: {nutrition}
            </div>
            <div>
                <h2> Ingredients List </h2>
                <ul>
                {this.parseList(ingredients)}
                {/* this is currently an array - we need logic to split and display properly */}
                </ul>
            </div>
            <div>
                <h2> Directions List </h2>
                <ol>
                {this.parseList(directions)} 
                {/* this is currently an array - we need logic to split and display properly */}
                </ol>
            </div>

      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Quicksave <Icon name='chevron right' />
      </Button>
      <Button primary>
        Save with Tags <Icon name='chevron right' />
      </Button>
    </Modal.Actions>
  </Modal>)
    }
}


export default RecipeModal