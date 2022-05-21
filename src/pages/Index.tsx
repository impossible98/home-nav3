import { Button, Grid, Layout, Menu, Switch, Typography } from '@arco-design/web-react';
import { IconBook, IconHome } from '@arco-design/web-react/icon';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEffect, useState } from 'react';

import FooterIndex from '@/components/Footer/Index';
import HomeIndex from '@/components/Home/Index';
import { TITLE } from '@/utils/constants';

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
          height: '70px',
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
              <FontAwesomeIcon icon={faBars} />
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
            <Switch
              checkedText={<FontAwesomeIcon icon={faSun} />}
              uncheckedText={<FontAwesomeIcon icon={faMoon} />}
              onChange={handleChange}
            />
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
            <MenuItem key='0_1'>
              <IconHome />
              <Typography.Text>
                Common
              </Typography.Text>
            </MenuItem>
            <MenuItem key='0_2'>
              <IconBook />
              <Typography.Text>
                Documentation
              </Typography.Text>
            </MenuItem>
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
