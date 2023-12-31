import { LoadingOutlined } from '@ant-design/icons';
import { blue } from '@ant-design/colors';
import { Space, Spin } from 'antd';
import { FC } from 'react';

const antIcon = (
  <LoadingOutlined
    style={{ fontSize: 54 }}
    spin
  />
);

const contentStyle: React.CSSProperties = {
  backgroundColor: blue[0],
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
};

const LoadingAll: FC = () => {
  return (
    <Space style={contentStyle}>
      <Spin indicator={antIcon} />
    </Space>
  );
};

export default LoadingAll;
