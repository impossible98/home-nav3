import { Grid, GridItem } from '@chakra-ui/react';

import SearchTab from './SearchTab';

function HomeIndex() {
  return (
    <Grid autoColumns=''>
      <GridItem>
        <SearchTab />
      </GridItem>
    </Grid>
  );
}

export default HomeIndex;
