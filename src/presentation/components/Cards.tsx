import { useNavigate } from 'react-router';
import { Card, Tooltip } from 'antd';
import { FC } from 'react';

import useDetailNewsStore from '../../domain/store/detailNews';
import imgAlt from '../assets/polaceholder_image.svg';
import { NewsItem } from '../../data/types/newsType';

const { Meta } = Card;

interface NewsCardProps {
  newsItem: NewsItem;
}

const Cards: FC<NewsCardProps> = ({ newsItem }) => {
  const setSelectedNewsItem = useDetailNewsStore(
    (state) => state.setSelectedNewsItem
  );
  const navigate = useNavigate();

  const handleCardClick = () => {
    setSelectedNewsItem(newsItem);
    navigate(`/${newsItem.title}`);
  };

  return (
    <Card
      hoverable
      style={{ width: 300, marginBottom: 20, padding: 5 }}
      onClick={handleCardClick}
      cover={
        <Tooltip
          mouseEnterDelay={0.5}
          title="Click for detail"
        >
          <img
            style={{
              height: 250,
              objectFit: 'cover',
              objectPosition: 'center',
              cursor: 'pointer',
            }}
            alt={newsItem.title}
            src={newsItem.urlToImage ? newsItem.urlToImage : imgAlt}
          />
        </Tooltip>
      }
    >
      <Meta
        title={
          <div
            style={{
              whiteSpace: 'normal',
            }}
          >
            {newsItem.title}
          </div>
        }
      />
    </Card>
  );
};

export default Cards;
