import { Image, Typography } from 'antd';

import useDetailNewsStore from '../../domain/store/detailNews';
import LayoutComp from '../components/LayoutComp';

const { Title, Text, Link } = Typography;

const DetailNews = () => {
  const selectedNewsItem = useDetailNewsStore(
    (state) => state.selectedNewsItem
  );

  const dateType = (date: any) => {
    const dated: any = new Date(date);
    const formattedDate = dated.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return formattedDate;
  };

  return (
    <LayoutComp>
      <div style={{ padding: '20px' }}>
        {selectedNewsItem && (
          <div>
            <Title level={2}>{selectedNewsItem.title}</Title>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              <Image
                src={selectedNewsItem.urlToImage}
                alt={selectedNewsItem.title}
                style={{
                  maxWidth: '100%',
                  marginBottom: '20px',
                }}
              />
            </div>
            <Text strong>{dateType(selectedNewsItem.publishedAt)}</Text> <br />
            <Text>{selectedNewsItem.description}</Text>
            <br />
            <Text>{selectedNewsItem.content}</Text>
            <br />
            <Link
              href={selectedNewsItem.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </Link>
          </div>
        )}
      </div>
    </LayoutComp>
  );
};

export default DetailNews;
