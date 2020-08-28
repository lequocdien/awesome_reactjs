import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class RightMenu extends Component {
  render() {
    return (
      <Menu {...this.props.mode} style={{border: 'none'}}>
        <Menu.Item key="mail">
          <a href="">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="">Signup</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightMenu;