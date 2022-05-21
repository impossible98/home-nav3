import { Avatar, Card, Layout, Typography } from '@arco-design/web-react';
import { useState } from 'react';

interface DisplayProps {
  title: string;
  description: string;
  url: string;
}

function Display(props: DisplayProps) {
  const [transform, setTransform] = useState('');
  function handleClick() {
    window.open(props.url);
  }

  function handleMouseEnter() {
    setTransform('translateY(-10px)');
  }

  function handleMouseLeave() {
    setTransform('');
  }

  return (
    <Card
      hoverable
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        minWidth: '100%',
        width: '300px',
        maxWidth: '300px',
        height: '80px',
        transform: transform,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#1D2129',
          }}
        >
          <Avatar
            size={40}
            style={{
              marginRight: 12,
              backgroundColor: '#165DFF',
            }}
          >
            {props.title.charAt(0)}
          </Avatar>
          <Layout>
            <Typography.Text bold>{props.title}</Typography.Text>
            <Typography.Text type='secondary'>{props.description}</Typography.Text>
          </Layout>
        </span>
      </div>
    </Card>
  );
}

export default Display;
