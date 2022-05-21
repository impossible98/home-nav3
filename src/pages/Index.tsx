import { Layout } from '@arco-design/web-react';

import FooterIndex from '@/components/Footer/Index';
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
          borderBottom: '1px solid #e8e8e8',
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
