import { Divider, Grid, GridItem } from '@chakra-ui/react';
import SearchTab from './SearchTab';

function HomeIndex() {
  return (
    <>
      <Grid>
        <GridItem>
          <SearchTab />
        </GridItem>
      </Grid>
      <Divider
        sx={{
          backgroundColor: 'grey',
        }}
      />
    </>
  );
}

export default HomeIndex;
