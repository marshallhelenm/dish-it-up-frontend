import React, { Component } from 'react'
import { Menu, Segment, Dropdown, Input } from 'semantic-ui-react'
import NavDrop from './NavDrop'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu color='orange' stackable>
            <Menu.Item>
            <img src="https://image.freepik.com/free-vector/cartoon-chef-show-ok_61878-753.jpg" />
            <h2>Dish It Up</h2>
            </Menu.Item>

          <Menu.Item
            name='Dashboard'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='My Recipes'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='My Pantry'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Shopping List'
            onClick={this.handleItemClick}
          />



          <Menu.Menu position='right'>
            <Menu.Item 
          name='search'    
          onClick={this.handleItemClick}
          position='right'>
                <Input className='icon' icon='search' placeholder='Quick Recipe Search' />
            </Menu.Item>

            <Menu.Item
            name='navigate'   
            onClick={this.handleItemClick}>
             {<NavDrop />}
            </Menu.Item>

            <Menu.Item
              name='logout'
              onClick={this.handleItemClick}

            />
          </Menu.Menu>
        </Menu>

        <Segment>
          <img src='/images/wireframe/media-paragraph.png' />
        </Segment>
      </div>
    )
  }
}