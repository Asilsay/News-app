import { Suspense, lazy, useEffect, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import { Typography, Row, Col } from 'antd';

import useCategoryStore from '../../domain/store/categoryNews';
import { NewsItem } from '../../data/types/newsType';
import LayoutComp from '../components/LayoutComp';
import LoadingAll from '../components/LoadingAll';
import swal from '../../data/utils/swal';
import api from '../../domain/api/api';

const Cards = lazy(() => import('../components/Cards'));

const { Title } = Typography;

function Homepage() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const MySwal = withReactContent(swal);
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const [load, setLoad] = useState<boolean>(false);

  const fetchDatas = async () => {
    setLoad(true);
    await api
      .GetTop(selectedCategory)
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
      })
      .finally(() => setLoad(false));
  };

  useEffect(() => {
    fetchDatas();
  }, [selectedCategory]);

  return (
    <LayoutComp>
      {load ? (
        <LoadingAll />
      ) : (
        <>
          <Title
            style={{
              textAlign: 'center',
              textTransform: 'uppercase',
              margin: '30px 0',
            }}
          >
            NEWS {selectedCategory !== 'general' ? selectedCategory : ''}
          </Title>

          <div>
            <Suspense fallback={<LoadingAll />}>
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
                    <Cards newsItem={news} />
                  </Col>
                ))}
              </Row>
            </Suspense>
          </div>
        </>
      )}
    </LayoutComp>
  );
}

export default Homepage;
