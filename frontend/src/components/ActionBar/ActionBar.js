import React, { useState } from 'react';
import { Button } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons';
import './ActionBar.css';

function ActionBar() {
  return (
    <div className="actionbar">
      <Button type="text">
        <SettingOutlined key="setting" />
      </Button>
      <Button type="text">
        <EditOutlined key="edit" />
      </Button>
      <Button type="text">
        <EllipsisOutlined key="ellipsis" />
      </Button>
    </div>
  );
}

export default ActionBar;
