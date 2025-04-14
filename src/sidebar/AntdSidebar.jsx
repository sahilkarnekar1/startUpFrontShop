// components/AntdSidebar.jsx
import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { menuItems } from '../HandlerFunctionsForDashboard/menuItems';

const AntdSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick = ({ key }) => {
    navigate(`/${key}`);
  };

  return (
    <div style={{ width: collapsed ? "auto" : 256 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        // defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={menuItems}
        onClick={onClick}
        selectedKeys={[location.pathname.replace('/', '')]}
      />
    </div>
  );
};

export default AntdSidebar;
