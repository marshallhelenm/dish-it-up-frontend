import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react'

class ProgressBar extends Component {
  state = { 
      percent: 0 
    }

  increment = () =>
    this.setState((prevState) => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
    }))

  render() {
    return (
      <div>
        <Progress percent={this.state.percent} indicating />
      </div>
    )
  }
}

export default ProgressBar