import React, { Component } from "react";
import RecipeContainer from "./RecipeContainer";
import ProgressBar from "../components/ProgressBar";
import IngredientSearch from "./IngredientSearch";
import BasicSearch from "../components/BasicSearch";
import PrivacyHOC from "../HOC/PrivacyHOC";
import { Segment, Grid, Divider, Button } from "semantic-ui-react";

class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      showingProgress: false,
      //   progress: 0,
      searchPerformed: false
    };
  }

  beginSearch = () => {
    this.props.searchResults.recipes = null;
    this.setState(prevState => {
      return { searchPerformed: true };
    });
  };

  render() {
    return (
      <div id="search-page">
        <div id="search-forms">
          <Segment>
            <Grid columns={2} stackable textAlign="center">
              <Grid.Row verticalAlign="middle">
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
