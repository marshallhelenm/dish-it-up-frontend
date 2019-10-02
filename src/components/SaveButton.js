import React, { Component } from 'react'
import {Button, Icon} from 'semantic-ui-react'

class RecipesHeader extends Component {
    render(){

        return(
            <Button icon onClick={this.props.onSaveRecipe}>
            <Icon name={this.props.saved ? 'heart' : "heart outline"} />
          </Button>
        )
    }


}

export default RecipesHeader

