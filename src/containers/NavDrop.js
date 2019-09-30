import React, { Component } from "react";
import { Dropdown } from 'semantic-ui-react'


class NavDrop extends Component {
    handleOnChange = e => {
        console.log("go somewhere", e.target);
        // switch (e.target.value) {
        // case 0: console.log('go here')
        // }
    };



    render() {
        const navOptions = [{text: 'Dashboard', value: 0},
            {text: 'Pantry', value: 1},
            {text: 'My Recipes', value: 2},
        ]
        return (
            <div id="nav-drop">
                <Dropdown placeholder='Navigate' search selection options={navOptions} onChange={this.handleOnChange} />

            </div>
        );
  }
}

export default NavDrop;
