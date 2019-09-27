import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavDrop extends Component {

    render(){
        return(
            <div id='nav-drop' >
            This will be a dropdown imported from semantic UI!
            <Link to='/search' >Search Recipes</Link>
            <Link to='/pantry' >view pantry</Link>
            <Link to='/recipes' >my recipes</Link>
            <Link to='/' >dashboard</Link>
            </div>
        )
    }
}

export default NavDrop