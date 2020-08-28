import React, { Component } from 'react';
import { Menu } from 'antd';

const LeftMenu = (props) => {
  return (
    <Menu {...props.mode} style={{ border: 'none' }}>
      <Menu.Item key="mail">
        <a href="">Home</a>
      </Menu.Item>
      <Menu.SubMenu title={<span>Blogs</span>}>
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
      <Menu.SubMenu title="Product">
        <Menu.Item>C#</Menu.Item>
        <Menu.Item>NodeJS</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="alipay">
        <a href="">Contact Us</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
