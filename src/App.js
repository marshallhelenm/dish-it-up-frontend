import React, { Component } from "react";
import "./App.css";
import Dashboard from "./containers/Dashboard";
import SearchPage from "./containers/SearchPage";
import LoginPage from "./containers/LoginPage";
import MyRecipesPage from "./containers/MyRecipesPage";
import NavBar from "./containers/NavBar";
import Pantry from "./containers/Pantry";
import { BrowserRouter as Router, Route } from "react-router-dom";

const BASE_URL = "http://localhost:3000/";

class App extends Component {
  constructor(){
    super()
 

    this.state = {
      query: "",
      logged_in: false,
      searchResults: []
    };
  }

  logIn = username => {
    console.log("loggin in!", username);
    fetch(BASE_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: username
      })
    })
      .then(response => response.json())
      .then(user => {
        localStorage.setItem("user_id", user.user_id);
        this.setState(prevState => {...prevState, })
      });
    // this.setState(prevState => {
    //   ...prevState,
    //   currentUser:
    // })
  };

  changeQuery = searchTerm => {
    console.log(searchTerm);
    this.setState(
      prevState => ({
        query: searchTerm
      }),
      () => this.fetchRecipes()
    );
  };

  fetchRecipes = () => {
    console.log("fetchin those recipes");
    console.log(this.state.query);
    let searchTerm = this.state.query;
    fetch("http://localhost:3000/getrecipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        searchTerm: searchTerm
      })
    })
      .then(response => response.json())
      .then(results =>
        this.setState({
          searchResults: results
        })
      );
  };

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          {this.state.logged_in ? (
            <Route path="/" exact render={() => <Dashboard />} />
          ) : (
            <Route
              path="/"
              exact
              render={() => <LoginPage onLogIn={this.logIn} />}
            />
          )}
          <Route
            path="/search"
            render={() => (
              <SearchPage
                onRecipeInput={this.changeQuery}
                searchResults={this.state.searchResults}
              />
            )}
          />
          <Route path="/pantry" render={() => <Pantry />} />
          <Route
            path="/recipes"
            render={() => (
              <MyRecipesPage currentUser={localStorage.getItem('user_id')} />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;

// <Router>
// {(this.state.logged_in) ?
// // <Route path='/' render={ props => <NavBar />} />,
// <Route path='/' exact render={ props => <Dashboard onRecipeInput={this.changeQuery} />} />
// :
//   <Route path='/' exact render={props => <LoginPage />} />
// }
// </Router>
