import { useEffect, useState } from 'react';

import { Typography, Row, Col } from 'antd';

import LayoutComp from '../components/LayoutComp';
import Cards from '../components/Cards';
import axios from 'axios';

const { Title } = Typography;

function Routes() {
  const [newsData, setNewsData] = useState<any[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=099867b8163745758c89742fda5d895e'
        );
        setNewsData(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <LayoutComp>
      <Title style={{ textAlign: 'center' }}>NEWS</Title>

      <div className="site-layout-content">
        <Row gutter={[16, 16]}>
          {newsData.map((news, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              style={{ display: 'flex', marginBottom: '12px' }}
            >
              <Cards
                title={news.title}
                description={news.description}
                imageUrl={news.urlToImage}
                url={news.url}
              />
            </Col>
          ))}
        </Row>
      </div>
    </LayoutComp>
  );
}

export default Routes;
