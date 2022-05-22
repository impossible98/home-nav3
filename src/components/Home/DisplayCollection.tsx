import { CATALOGUE, WEBSITE } from '@/utils/constants';
import { Grid, Tabs, Typography } from '@arco-design/web-react';
import Display from './Display';

const Row = Grid.Row;
const Col = Grid.Col;
const TabPane = Tabs.TabPane;

function DisplayCollection() {
  return (
    <div>
      {CATALOGUE.map((tab, index) => (
        <Tabs activeTab='1' key={index}>
          <TabPane
            key='1'
            title={
              <Typography.Text>
                {tab.title.charAt(0).toUpperCase() + tab.title.slice(1)}
              </Typography.Text>
            }
          >
            <Row>
              {WEBSITE[tab.title].map((col: any) => (
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
                    color={col.color}
                  />
                </Col>
              ))}
            </Row>
          </TabPane>
        </Tabs>
      ))}
    </div>
  );
}

export default DisplayCollection;
