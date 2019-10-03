import React, { Component } from 'react';
import Cookbook from './Cookbook';
import ProfileContainer from './ProfileContainer'
import ButtonContainer from './ButtonContainer';
import PrivacyHOC from '../HOC/PrivacyHOC';

class Dashboard extends Component {
 render(){
    return <div>
        <div id='dash-div' >
            <div id='dash-profile'>
            <ProfileContainer />
            </div>
            <div id='dash-cookbook'>
            <Cookbook logged_in={true} />
            </div>
            {/* <div>
            <ButtonContainer />
            </div> */}
        </div>

    </div>
 }

}

export default PrivacyHOC(Dashboard)