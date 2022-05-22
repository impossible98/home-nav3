import { Avatar, Card, Layout, Typography } from '@arco-design/web-react';
import { useState } from 'react';

interface DisplayProps {
  title: string;
  description: string;
  url: string;
  color?: string;
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
        width: '400px',
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
              backgroundColor: props.color,
            }}
          >
            {props.title.charAt(0).toUpperCase()}
          </Avatar>
          <Layout>
            <Typography.Text
              bold
              ellipsis={{ expandable: false }}
              style={{
                width: '330px',
              }}
            >
              {props.title}
            </Typography.Text>
            <Typography.Text
              type='secondary'
              ellipsis={{ expandable: false }}
              style={{
                width: '330px',
              }}
            >
              {props.description}
            </Typography.Text>
          </Layout>
        </span>
      </div>
    </Card>
  );
}

export default Display;
