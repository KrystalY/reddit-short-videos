import React, { useState } from 'react';
import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from '@ant-design/icons';
import './MenuBar.css';

const { SubMenu } = Menu;

function MenuBar() {
  const [current, setCurrent] = useState('');

  const handleClick = (e) => {
    console.log(e);
    setCurrent(e.key);
  };
  return (
    <div className="menuBar">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="Home" icon={<MailOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="Video" icon={<AppstoreOutlined />}>
          Video
        </Menu.Item>
        <Menu.Item key="User" icon={<AppstoreOutlined />}>
          User
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default MenuBar;
