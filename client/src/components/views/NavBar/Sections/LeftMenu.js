import React from 'react';
import { Menu } from 'antd';
const { SubMenu } = Menu;

function LeftMenu(props) {
  return (
    <Menu mode='inline'>
      <Menu.Item key='mail'>
        <a href='/'>Home</a>
      </Menu.Item>
      <SubMenu title={<span>Blogs</span>}>
        <Menu.ItemGroup title='item 1'>
          <Menu.Item key='setting:1'>Option 1</Menu.Item>
          <Menu.Item key='setting:2'>Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title='item 2'>
          <Menu.Item key='setting:3'>Option 3</Menu.Item>
          <Menu.Item key='setting:4'>Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
}

export default LeftMenu;
