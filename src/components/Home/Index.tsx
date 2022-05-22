import { Grid } from '@arco-design/web-react';

import DisplayCollection from './DisplayCollection';
import SearchTab from './SearchTab';
const Row = Grid.Row;
const Col = Grid.Col;

function HomeIndex() {
  return (
    <>
      <Row
        align='center'
        justify='center'
        style={{
          padding: '20px',
        }}
      >
        <Col span={20}>
          <SearchTab />
        </Col>
      </Row>

      <div
        style={{
          backgroundColor: '#F0F2F5',
        }}
      >
        <DisplayCollection />
      </div>
    </>
  );
}

export default HomeIndex;
