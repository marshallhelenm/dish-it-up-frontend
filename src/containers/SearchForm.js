import React, { Component } from 'react'

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
        console.log(e.target.value)

    }
    render(){

        return <div>Search form
            <form onSubmit={this.handleOnRecipeSubmit}>
                <input onChange={this.handleOnChange} value={this.state.searchTerm} type='text' />
                <button>Search</button>
            </form>
                <button>Surprise Me!!!</button>
        </div>
    }


}

export default SearchForm