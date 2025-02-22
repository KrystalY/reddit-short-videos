import React, { useState } from 'react';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav
      className="menu"
      style={{ position: 'fixed', zIndex: 5, width: '100%' }}
    >
      <div className="menu__logo">
        <a href="/">Logo</a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <input type="text" />
        </div>
        <div className="menu_rigth">
          <Button>Log in</Button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
