import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react'

class ProgressBar extends Component {

  render() {
    return (
      <div>
        {/* <Progress percent={this.props.progress} progress indicating >
          Searching for Recipes...
        </Progress> */}
         <>
         <h1 style={{display: 'flex', justifyContent: 'center'}}>Cooking up your Awesome Recipes...</h1>
         <div style={{display: 'flex', justifyContent: 'center'}}>
          <img
            style={{ height: "300px" }}
            src="https://media.giphy.com/media/l41lPX79K0l6sIvni/giphy.gif"
          />
          </div>
          </>
        
      </div>
    )
  }
}

export default ProgressBar