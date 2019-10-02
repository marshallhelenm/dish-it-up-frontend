import React, { Component } from 'react';
import MyRecipesPage from './MyRecipesPage';
import ProfileContainer from './ProfileContainer'
import ButtonContainer from './ButtonContainer';

class Dashboard extends Component {
 render(){
    return <div>
        <h1>This is the Dashboard.</h1>
        <div id='dash-div' >
            <div>
            <ProfileContainer />
            </div>
            <div id='dash-cookbook'>
            <MyRecipesPage  />
            </div>
            <div>
            <ButtonContainer />
            </div>
        </div>

    </div>
 }

}

export default Dashboard