import { Divider, Grid } from '@arco-design/web-react';

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

      <Divider />
    </>
  );
}

export default HomeIndex;
