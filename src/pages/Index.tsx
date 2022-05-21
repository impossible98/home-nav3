import { Layout } from '@arco-design/web-react';

import HomeIndex from '@/components/Home/Index';

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

function Index() {
  return (
    <Layout
      style={{
        height: '100vh',
        minHeight: '568px',
      }}
    >
      <Header
        style={{
          height: '70px',
        }}
      >
        Header
      </Header>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Content>
            <HomeIndex />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Index;
