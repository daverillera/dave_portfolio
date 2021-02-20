import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import './navBar.css';

export class NavBar extends React.Component {

  render() {
     return (
        <Menu menuButton={<MenuButton></MenuButton>}>
            <MenuItem>New File</MenuItem>
            <MenuItem>Save</MenuItem>
            <MenuItem>Close Window</MenuItem>
        </Menu>
      );
    }
  }

  export default NavBar;
 



