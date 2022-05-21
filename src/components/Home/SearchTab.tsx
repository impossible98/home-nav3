import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import Search from './Search';

function SearchTab() {
  return (
    <>
      <Tabs variant='soft-rounded' colorScheme='gray' isLazy>
        <TabList>
          <Tab>Bing CN</Tab>
          <Tab>Sogou</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Search />
          </TabPanel>
          <TabPanel>
            <Search />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default SearchTab;
