import { FC, useState } from 'react';
import { Layout, Menu } from 'antd';
import logoNav from '../assets/logoNavbar.svg';
import { blue } from '@ant-design/colors';
import useCategoryStore from '../../domain/store/categoryNews';
import { Link } from 'react-router-dom';

const { Header } = Layout;

interface ItemType {
  key: string;
  label: string;
}

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

const items: ItemType[] = [
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
  const [current, setCurrent] = useState<string>('general');

  const setSelectedCategory = useCategoryStore(
    (state) => state.setSelectedCategory
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrent(category);
  };

  return (
    <Header style={headerStyle}>
      <Link
        to={'/'}
        onClick={() => {
          handleCategoryChange('general');
        }}
      >
        <img
          src={logoNav}
          alt="logo-news-app"
          style={{ display: 'flex', alignItems: 'center' }}
        />
      </Link>
      <Menu
        style={menuStyle}
        mode="horizontal"
        defaultSelectedKeys={['general']}
        selectedKeys={[current]}
        onClick={(event) => {
          const selectedCategory = event.key;
          handleCategoryChange(selectedCategory);
        }}
        items={items.map((item: ItemType) => ({
          key: item.key,
          label: item.label,
        }))}
      />
    </Header>
  );
};

export default Navbar;
