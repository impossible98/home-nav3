import { Grid, Tabs, Typography } from '@arco-design/web-react';

import { WEBSITE } from '@/utils/constants';
import Display from './Display';

const Row = Grid.Row;
const Col = Grid.Col;
const TabPane = Tabs.TabPane;

function DisplayCollection() {
  const { common, documentation, tool, video } = WEBSITE;

  return (
    <>
      <Tabs activeTab='1'>
        <TabPane
          key='1'
          title={
            <Typography.Text>
              Common
            </Typography.Text>
          }
        >
          <Row>
            {common.map((col, index) => (
              <Col
                flex='450px'
                style={{
                  marginLeft: 20,
                  marginBottom: 20,
                }}
                key={index}
              >
                <Display
                  title={col.title}
                  description={col.description}
                  url={col.url}
                />
              </Col>
            ))}
          </Row>
        </TabPane>
      </Tabs>

      <Tabs activeTab='1'>
        <TabPane
          key='1'
          title={
            <Typography.Text>
              Documentation
            </Typography.Text>
          }
        >
          <Row>
            {documentation.map((col, index) => (
              <Col
                key={index}
                flex='450px'
                style={{
                  marginLeft: 20,
                  marginBottom: 20,
                }}
              >
                <Display
                  title={col.title}
                  description={col.description}
                  url={col.url}
                />
              </Col>
            ))}
          </Row>
        </TabPane>
      </Tabs>

      <Tabs activeTab='1'>
        <TabPane
          key='1'
          title={
            <Typography.Text>
              Tool
            </Typography.Text>
          }
        >
          <Row>
            {tool.map((col, index) => (
              <Col
                key={index}
                flex='450px'
                style={{
                  marginLeft: 20,
                  marginBottom: 20,
                }}
              >
                <Display
                  title={col.title}
                  description={col.description}
                  url={col.url}
                />
              </Col>
            ))}
          </Row>
        </TabPane>
      </Tabs>

      <Tabs activeTab='1'>
        <TabPane
          key='1'
          title={
            <Typography.Text>
              Video
            </Typography.Text>
          }
        >
          <Row>
            {video.map((col, index) => (
              <Col
                key={index}
                flex='450px'
                style={{
                  marginLeft: 20,
                  marginBottom: 20,
                }}
              >
                <Display
                  title={col.title}
                  description={col.description}
                  url={col.url}
                />
              </Col>
            ))}
          </Row>
        </TabPane>
      </Tabs>
    </>
  );
}

export default DisplayCollection;
