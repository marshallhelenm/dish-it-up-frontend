import React, { Component } from 'react';
import './App.css';
import Dashboard from './containers/Dashboard'

class App extends Component {

  state={
    query: ''
    
  }

  changeQuery = (searchTerm) => {
    console.log(searchTerm)
    this.setState((prevState) => ({
      query: searchTerm
    }),() => this.fetchRecipes())
  }
  
  fetchRecipes = () => {
    console.log('fetchin those recipes')
    console.log(this.state.query)
    let searchTerm = this.state.query
    fetch('http://localhost:3000/getrecipes',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        searchTerm: searchTerm
      })
    })
    .then(response => response.json())
    .then(json => console.log(json))
    
  }

  render(){
    return (
    <div className="App">
      DISH IT UP
      <Dashboard onRecipeInput={this.changeQuery} />
    </div>
  );
}
}

export default App;
