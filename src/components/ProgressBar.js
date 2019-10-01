import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react'

class ProgressBar extends Component {

  render() {
    return (
      <div>
        <Progress percent={this.props.progress} progress indicating >
          Searching for Recipes...
        </Progress>
      </div>
    )
  }
}

export default ProgressBar