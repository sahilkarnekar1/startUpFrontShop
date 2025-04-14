// components/menuItems.js
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
    ShopOutlined,
  } from '@ant-design/icons';
  
  export const menuItems = [
    { key: 'dashboard', icon: <ShopOutlined />, label: 'Dashboard' },
    { key: 'inventory', icon: <PieChartOutlined />, label: 'Inventory' },
    { key: 'orders', icon: <ContainerOutlined />, label: 'Orders' },
    {
      key: 'sub1',
      label: 'Settings',
      icon: <MailOutlined />,
      children: [
        { key: 'profile', label: 'Profile' },
        { key: 'security', label: 'Security' },
      ],
    },
  ];
  