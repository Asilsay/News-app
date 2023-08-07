import { FC } from 'react';
import { Card, Tooltip } from 'antd';
import imgAlt from '../assets/polaceholder_image.svg';

const { Meta } = Card;

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const Cards: FC<NewsCardProps> = ({ title, imageUrl }) => {
  return (
    <Card
      hoverable
      style={{ width: 300, marginBottom: 20, padding: 5 }}
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
              cursor: 'pointer', // Add cursor style
            }}
            alt={title}
            src={imageUrl ? imageUrl : imgAlt}
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
            {title}
          </div>
        }
      />
    </Card>
  );
};

export default Cards;
