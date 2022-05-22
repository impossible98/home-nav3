import { Button, Dropdown, Grid, Layout, Menu, Space, Switch, Typography } from '@arco-design/web-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEffect, useState } from 'react';

import FooterIndex from '@/components/Footer/Index';
import HomeIndex from '@/components/Home/Index';
import { catalogue, TITLE } from '@/utils/constants';

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;
const MenuItem = Menu.Item;
const Row = Grid.Row;
const Col = Grid.Col;

function Index() {
  const [collapsed, setCollapsed] = useState(false);

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.title = `Index - ${TITLE}`;
  });

  function handleCollapsed() {
    setCollapsed(!collapsed);
  }

  function handleChange() {
    setTheme(theme === 'light' ? 'dark' : 'light');

    if (theme === 'light') {
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      document.body.removeAttribute('arco-theme');
    }
  }

  return (
    <Layout
      style={{
        height: '100vh',
        minHeight: '568px',
      }}
    >
      <Header
        style={{
          background: '#F7F8FA',
          borderBottom: '1px solid #e8e8e8',
          height: '65px',
        }}
      >
        <Row align='center' justify='center'>
          <Col
            span={8}
          >
            <Button
              type='text'
              onClick={handleCollapsed}
            >
              <FontAwesomeIcon icon='fa-solid fa-bars' />
            </Button>
          </Col>
          <Col
            span={8}
            style={{
              height: '70px',
            }}
          >
          </Col>
          <Col
            span={8}
          >
            <Space>
              <Switch
                checkedText={<FontAwesomeIcon icon='fa-solid fa-sun' />}
                uncheckedText={<FontAwesomeIcon icon='fa-solid fa-moon' />}
                onChange={handleChange}
              />
              <Dropdown
                droplist={
                  <Menu>
                    <MenuItem key='1'>English - English</MenuItem>
                    <MenuItem key='2'>简体中文 - Chinese (Simplified)</MenuItem>
                  </Menu>
                }
                position='bl'
              >
                <Button type='text'>
                  <FontAwesomeIcon
                    icon='fa-solid fa-language'
                    color='#000000'
                    size='2x'
                  />
                </Button>
              </Dropdown>
            </Space>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider
          collapsed={collapsed}
          onCollapse={handleCollapsed}
          collapsible
          trigger={null}
          breakpoint='xl'
        >
          <div />
          <Menu
            defaultOpenKeys={['1']}
            defaultSelectedKeys={['0_3']}
            style={{ width: '100%' }}
          >
            {catalogue.catalogue.map((item, index) => (
              <MenuItem
                key={index.toString()}
              >
                {
                  <Space>
                    {item.icon && <FontAwesomeIcon icon={item.icon} />}
                    <Typography.Text
                      bold
                      style={{
                        marginLeft: '10px',
                      }}
                    >
                      {item.title}
                    </Typography.Text>
                  </Space>
                }
              </MenuItem>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <HomeIndex />
          </Content>
          <Footer
            style={{
              borderTop: '1px solid #e8e8e8',
              height: '70px',
            }}
          >
            <FooterIndex />
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Index;
