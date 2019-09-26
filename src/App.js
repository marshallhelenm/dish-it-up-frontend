import React, { Component } from 'react';
import './App.css';
import Dashboard from './containers/Dashboard'

class App extends Component {

  state={
    query: ''
    
  }

  changeQuery = (searchTerm) => {
    console.log(searchTerm)
  }
  
  fetchRecipes = () => {
    console.log('fetchin those recipes')

    // fetch('localhost:3000/getrecipes')
    // .then(response => response.json())
    // .then(json => console.log(json))
    
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
