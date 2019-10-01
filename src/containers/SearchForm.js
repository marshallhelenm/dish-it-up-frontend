import React, { Component } from 'react'
// import { Button } from 'semantic-ui-react'


class SearchForm extends Component {

    constructor(){
        super()
        this.state = {
            searchTerm: ""
        }
    }

    handleOnChange = (e) => {
        console.log(e.target.value)
        let newSearch = e.target.value
        this.setState((prevState) => ({
            searchTerm: newSearch
        }))
    }

    handleOnRecipeSubmit = (e) => {
        e.preventDefault()
        let searchTerm = this.state.searchTerm
        this.props.onRecipeInput(searchTerm)
        this.props.onLoading()
    }

    render(){

        return <div>Search form
            <form onSubmit={this.handleOnRecipeSubmit} >
                <input onChange={this.handleOnChange} value={this.state.searchTerm} type='text' />
                <button>Search</button>
            </form>
                <button>Surprise Me!!!</button>
        </div>
    }


}

export default SearchForm