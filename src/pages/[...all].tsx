import { Button, Card, Grid, Layout, List, Typography } from '@arco-design/web-react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useEffect, useState } from 'react';
import userAgent from 'ua-parser-js';

import { ip } from '@/api/main';
import { TITLE } from '@/utils/constants';
dayjs.extend(customParseFormat);

const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;
const Row = Grid.Row;
const Col = Grid.Col;
const Meta = Card.Meta;

function NotFound() {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    document.title = `404 - ${TITLE}`;

    const time = setInterval(() => {
      setNow(dayjs());
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  });

  return (
    <Layout style={{ height: '400px' }}>
      <Header
        style={{
          background: '#F7F8FA',
          borderBottom: '1px solid #e8e8e8',
          height: '70px',
        }}
      >
      </Header>
      <Content
        style={{
          margin: '0 auto',
          width: '400px',
        }}
      >
        <Row>
          <Col>
            <Card
              style={{
                marginTop: '20px',
                background: '#DED7C4',
                borderRadius: '15px',
                boxShadow: '0px 0px 10px #e3e3e3',
                width: '400px',
              }}
            >
              <Meta
                description={
                  <Layout>
                    <Typography.Text
                      style={{
                        fontSize: '20px',
                      }}
                    >
                      rather than a beep
                    </Typography.Text>
                    <Typography.Text
                      style={{
                        fontSize: '20px',
                      }}
                    >
                      or a rude error message,
                    </Typography.Text>
                    <Typography.Text
                      style={{
                        fontSize: '20px',
                      }}
                    >
                      these words: &quot;file not found.&quot;
                    </Typography.Text>

                    <cite
                      style={{
                        fontSize: '20px',
                        marginLeft: '50px',
                      }}
                    >
                      —Len Dvorkin
                    </cite>
                    <Typography.Text
                      style={{
                        color: '#8C8C8C',
                        fontSize: '60px',
                        writingMode: 'vertical-rl',
                      }}
                    >
                      俳句
                    </Typography.Text>
                  </Layout>
                }
              />
            </Card>
            <Layout>
              <Row
                style={{
                  marginTop: '20px',
                }}
              >
                <Col>
                  <Typography.Text
                    style={{
                      fontSize: '25px',
                    }}
                  >
                    There&apos;s nothing to see here.
                  </Typography.Text>
                </Col>
              </Row>
              <Row
                justify='center'
                style={{
                  marginTop: '20px',
                }}
              >
                <Col span={16}>
                  <Button
                    size='large'
                    status='danger'
                    shape='round'
                    type='primary'
                    href='/'
                  >
                    <Typography.Text
                      style={{
                        color: '#fff',
                        fontSize: '20px',
                      }}
                    >
                      Go back friend, go Home
                    </Typography.Text>
                  </Button>
                </Col>
              </Row>
            </Layout>
          </Col>
        </Row>

        <Row
          style={{
            marginTop: '20px',
          }}
        >
          <Col>
            <Layout>
              <Typography.Text
                style={{
                  fontSize: '20px',
                  marginBottom: '20px',
                }}
              >
                Now: {now.format('YYYY-MM-DD HH:mm:ss')}
              </Typography.Text>
              <List
                style={{
                  width: '400px',
                }}
                header='User-Agent'
                dataSource={[
                  userAgent(window.navigator.userAgent).os.name,
                  userAgent(window.navigator.userAgent).os.version,
                  userAgent(window.navigator.userAgent).browser.name,
                  userAgent(window.navigator.userAgent).browser.version,
                  JSON.stringify(userAgent(window.navigator.userAgent), null, '  '),
                ]}
                render={(item, index) => (
                  <List.Item
                    key={index}
                  >
                    {item}
                  </List.Item>
                )}
              />
            </Layout>
          </Col>
        </Row>
      </Content>
      <Footer
        style={{
          borderTop: '1px solid #e8e8e8',
          height: '70px',
        }}
      >
      </Footer>
    </Layout>
  );
}

export default NotFound;
