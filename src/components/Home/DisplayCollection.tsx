import { Grid } from '@arco-design/web-react';

import { WEBSITE } from '@/utils/constants';
import Display from './Display';

const Row = Grid.Row;
const Col = Grid.Col;

function DisplayCollection() {
  return (
    <Row justify='space-around'>
      {WEBSITE.map((col, index) => (
        <Col key={index} xs={24} sm={24} md={12} lg={8} xl={6}>
          <Display title={col.title} description={col.description} url={col.url} />
        </Col>
      ))}
    </Row>
  );
}

export default DisplayCollection;
