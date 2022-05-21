import { Grid, Tabs } from '@arco-design/web-react';
import { IconBook, IconHome } from '@arco-design/web-react/icon';

import { WEBSITE } from '@/utils/constants';
import Display from './Display';

const Row = Grid.Row;
const Col = Grid.Col;
const TabPane = Tabs.TabPane;

function DisplayCollection() {
  const common = WEBSITE.common;
  const documentation = WEBSITE.documentation;

  return (
    <>
      <Tabs activeTab='1'>
        <TabPane
          key='1'
          title={
            <span>
              <IconHome
                style={{
                  marginRight: 6,
                }}
              />
              Common
            </span>
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
            <span>
              <IconBook
                style={{
                  marginRight: 6,
                }}
              />
              Documentation
            </span>
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
    </>
  );
}

export default DisplayCollection;
