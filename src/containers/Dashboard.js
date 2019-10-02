import React, { Component } from 'react';
import MyRecipesPage from './MyRecipesPage';
import ProfileContainer from './ProfileContainer'
import ButtonContainer from './ButtonContainer';
import PrivacyHOC from '../HOC/PrivacyHOC';

class Dashboard extends Component {
 render(){
    return <div>
        <h1>This is the Dashboard.</h1>
        <div id='dash-div' >
            <div id='dash-profile'>
            <ProfileContainer />
            </div>
            <div id='dash-cookbook'>
            <MyRecipesPage logged_in={true} />
            </div>
            <div>
            <ButtonContainer />
            </div>
        </div>

    </div>
 }

}

export default PrivacyHOC(Dashboard)