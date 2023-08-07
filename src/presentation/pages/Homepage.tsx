import { useEffect, useState } from 'react';

import { Typography, Row, Col } from 'antd';

import LayoutComp from '../components/LayoutComp';
import Cards from '../components/Cards';
import withReactContent from 'sweetalert2-react-content';
import swal from '../../data/utils/swal';
import { NewsItem } from '../../data/types/newsType';
import api from '../../domain/api/api';

const { Title } = Typography;

function Routes() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const MySwal = withReactContent(swal);

  const fetchDatas = async () => {
    await api
      .GetTop('general')
      .then((response) => {
        const { articles } = response.data;
        setNewsData(articles);
      })
      .catch((error) => {
        MySwal.fire({
          icon: 'error',
          title: 'Failed',
          text: `error :  ${error.message}`,
          showCancelButton: false,
        });
      });
  };

  useEffect(() => {
    fetchDatas();
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
