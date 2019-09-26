import React, { Component } from 'react';
import RecipeContainer from './RecipeContainer';
import ProfileContainer from './ProfileContainer'
import ButtonContainer from './ButtonContainer';
import SearchForm from './SearchForm';
import ProfilePhoto from '../components/ProfilePhoto';

class Dashboard extends Component {
 render(){
    return <div>Hi
        <RecipeContainer/>
        <ProfileContainer/>
        <ButtonContainer/>
        <SearchForm onRecipeInput={this.props.onRecipeInput} />
        <ProfilePhoto />
    </div>
 }

}

export default Dashboard