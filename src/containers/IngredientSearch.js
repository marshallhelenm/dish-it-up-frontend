import React, { Component } from 'react'
import { Form, Input, Icon, Label, Button } from "semantic-ui-react";

class IngredientSearch extends Component {

    constructor(){
        super()
        this.state = {
            firstIngredient: "",
            secondIngredient: "",
            thirdIngredient: ""
        }
    }

    handleOnChange = (placement, e) => {
        console.log(placement)
        console.log(e.target.value)
        let changedIngredient = placement + "Ingredient"
        // let newSearch = e.target.value
        let newObject = {}
        newObject[changedIngredient] = e.target.value
        this.setState(newObject)
    }

    handleOnRecipeSubmit = (e) => {
        e.preventDefault()
        this.props.onStartSearch();
        let first = this.state.firstIngredient
        let second = this.state.secondIngredient
        let third = this.state.thirdIngredient
        let searchArray = [first, second, third]
        let filtered = searchArray.filter((element) => element !== "")
        let searchTerm = filtered.join(',')
        console.log(searchTerm)
        this.props.onRecipeInput("byIngredient", searchTerm)
        this.props.onLoading()
    }

    render(){

        return (
            <div id='ingredient-search'>
            <Form onSubmit={this.handleOnRecipeSubmit} >
                <Form.Group inline>

                <Form.Field>
                <input placeholder='first ingredient' onChange={e => this.handleOnChange("first", e)} value={this.state.firstIngredient} />
                </Form.Field>
                <Form.Field>
                <input placeholder='second ingredient' onChange={e => this.handleOnChange("second", e)} value={this.state.secondIngredient} />
                </Form.Field>
                <Form.Field>
                <input placeholder='third ingredient' onChange={e => this.handleOnChange("third", e)} value={this.statethirdIngredient} />
                </Form.Field>
                <Form.Button inverted color="olive">Search</Form.Button>
                </Form.Group>
            </Form>
            </div>
        )
        // return <div>Search by Ingredients
        //     <form onSubmit={this.handleOnRecipeSubmit} >
        //         <input onChange={e => this.handleOnChange("first", e)} value={this.state.firstIngredient} type='text' />
        //         <input onChange={e => this.handleOnChange("second", e)} value={this.state.secondIngredient} type='text' />
        //         <input onChange={e => this.handleOnChange("third", e)} value={this.state.thirdIngredient} type='text' />
        //         <button>Surprise Me!!!</button>
        //     </form>
        // </div>
    }

}

export default IngredientSearch