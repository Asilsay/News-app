import React, { FC } from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';
import { blue } from '@ant-design/colors';

const { Content } = Layout;

interface LayoutCompProps {
  children: React.ReactNode;
}

const contentStyle: React.CSSProperties = {
  color: blue[9],
  backgroundColor: blue[0],
  minHeight: '100vh',
  padding: '72px 50px 50px 50px',
  marginTop: '-64px',
};

const LayoutComp: FC<LayoutCompProps> = ({ children }) => {
  return (
    <Layout className="layout">
      <Navbar />
      <Content style={contentStyle}>{children}</Content>
    </Layout>
  );
};

export default LayoutComp;
