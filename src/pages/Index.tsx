import { Button, Layout, Menu, Typography } from '@arco-design/web-react';
import { IconBook, IconHome } from '@arco-design/web-react/icon';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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

function Index() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document.title = `Index - ${TITLE}`;
  });

  function handleCollapsed() {
    setCollapsed(!collapsed);
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
          borderBottom: '1px solid #e8e8e8',
          height: '70px',
        }}
      >
        <Button
          type='text'
          onClick={handleCollapsed}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
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
