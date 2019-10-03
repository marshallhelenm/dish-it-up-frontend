import React, { Component } from "react";
import RecipeContainer from "./RecipeContainer";
import ProgressBar from "../components/ProgressBar";
import IngredientSearch from "./IngredientSearch";
import BasicSearch from "../components/BasicSearch";
import PrivacyHOC from "../HOC/PrivacyHOC";
import {Segment,Grid,Divider,Button} from "semantic-ui-react"

class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      showingProgress: false,
    //   progress: 0,
      searchPerformed: false
    };
  }

//   toggleOnProgress = () => {
//     // console.log("toggling ON");
//     this.setState({
//         showProgress: true
//     })
//     //   () => {
//     //     this.increment();
//     //   }
//     // );
//   };

//   toggleOffProgress = () => {
//     // console.log("toggling");
//     // this.setState(
//     //   prevState => ({
//     //     progress: 0,
//     //     showingProgress: !this.state.showingProgress
//     //   }),
//     //   () => {
//     //     if (this.state.showingProgress) {
//     //       this.increment();
//     //     }
//     //   }
//     // );
//   };

  showProgressBar = () => {
    // return this.state.showingProgress ? (
    //   <ProgressBar progress={this.state.progress} />
    // ) : null;
  };

  setFinishProgress = () => {
    // this.setState(
    //   prevState => ({
    //     ...prevState,
    //     progress: 100
    //   }),
    //   () =>
    //     setTimeout(() => {
    //       this.toggleOffProgress();
    //     }, 1000)
    // );
  };

  setProgress = () => {
    // this.setState(prevState => ({
    //   ...prevState,
    //   progress: this.state.progress + Math.floor(Math.random() * 10)
    // }));
  };

  increment = () => {
    // for (var i = 0; i <= 6; i++) {
    //   (ind => {
    //     setTimeout(() => {
    //       this.setProgress();
    //     }, 1000 + 1000 * ind);
    //   })(i);
    // }
  };

  // increment = () =>{
  //     while(this.state.progress < 90) {
  //     setTimeout(() => {this.setProgress()}, 1000 + (1000 * 1))
  //     };
  // }
  // }

  // this.setState((prevState) => ({
  //   percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
  // }))}

  beginSearch = () => {
    this.props.searchResults.recipes = null;
      this.setState(prevState => {
          return {searchPerformed: true}
      })
  }



  render() {
    return (
      <div id='search-page'>
        <div id='search-forms'>




        <Segment>
            <Grid columns={2} stackable textAlign='center'>

            <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                
                <h4>Search for Recipe:</h4>
                <BasicSearch
                    onRecipeInput={this.props.onRecipeInput}
                    onToggleLoading={this.toggleLoading}
                    redirect={false}
                    onStartSearch={this.beginSearch}
                />
                </Grid.Column>

                <Grid.Column width={10}>
                <h4>Search by Ingredients:</h4>
                <IngredientSearch
                    onRecipeInput={this.props.onRecipeInput}
                    onLoading={this.toggleLoading}
                    onStartSearch={this.beginSearch}
                />
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </Segment>

          </div>
          <div>
        
          {this.showProgressBar()}
          <RecipeContainer
            onShow={this.showingProgress}
            recipes={this.props.searchResults.recipes}
            saved={false}
            page="search"
            performed={this.state.searchPerformed}
          />
      
        </div>
      </div>
    );
  }
}

export default PrivacyHOC(SearchPage);
