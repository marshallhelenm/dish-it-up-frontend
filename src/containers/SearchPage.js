import React, { Component } from 'react'
import SearchForm from './SearchForm'
import RecipeContainer from './RecipeContainer'

class SearchPage extends Component {


    render(){

        return <div>
            <SearchForm onRecipeInput={this.props.onRecipeInput} />
            <RecipeContainer recipes={this.props.searchResults.recipes} />
        </div>
    }


}

export default SearchPage