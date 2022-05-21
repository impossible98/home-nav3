import { Button, Card, Grid, Layout, Typography } from '@arco-design/web-react';

const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;
const Row = Grid.Row;
const Col = Grid.Col;
const Meta = Card.Meta;

function NotFound() {
  return (
    <Layout style={{ height: '400px' }}>
      <Header
        style={{
          height: '50px',
        }}
      >
        Header
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
                      these words: &lquot;file not found.&rquot;
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
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default NotFound;
