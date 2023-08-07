import { FC } from 'react';
import { Layout, Menu } from 'antd';
import logoNav from '../assets/logoNavbar.svg';
import { blue } from '@ant-design/colors';

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '32px',
  backgroundColor: blue[5],
  zIndex: '99',
  position: 'sticky',
  top: '0',
};

const menuStyle: React.CSSProperties = {
  backgroundColor: 'inherit',
  color: '#fff',
};

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
        defaultSelectedKeys={['1']}
        items={new Array(3).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
  );
};

export default Navbar;
