import { FC } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import logoNav from '../assets/logoNavbar.svg';
import { blue } from '@ant-design/colors';

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '32px',
  backgroundColor: blue[10],
  zIndex: '99',
  position: 'sticky',
  top: '0',
};

const menuStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'end',
  backgroundColor: 'inherit',
  width: '50%',
  color: '#fff',
};

const items: MenuProps['items'] = [
  {
    label: 'Business',
    key: 'business',
  },
  {
    label: 'Health',
    key: 'health',
  },
  {
    label: 'Science',
    key: 'science',
  },
  {
    label: 'Sports',
    key: 'sports',
  },
  {
    label: 'Technology',
    key: 'technology',
  },
];

const Navbar: FC = () => {
  return (
    <Header style={headerStyle}>
      <div>
        <img
          src={logoNav}
          alt="logo-news-app"
          style={{ display: 'flex', alignItems: 'center' }}
        />
      </div>
      <Menu
        style={menuStyle}
        mode="horizontal"
        defaultSelectedKeys={['science']}
        items={items}
      />
    </Header>
  );
};

export default Navbar;
