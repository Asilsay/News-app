import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { Typography } from 'antd';

import LayoutComp from '../components/LayoutComp';

const { Title } = Typography;

function Routes() {
  const [count, setCount] = useState(0);

  return (
    <LayoutComp>
      <Title style={{ textAlign: 'center' }}>NEWS</Title>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/Routes.tsx</code> and save to test HMR scacasc
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </LayoutComp>
  );
}

export default Routes;
