import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { WEBSITE } from '@/utils/constants';
import Search from './Search';

function SearchTab() {
  return (
    <>
      <Tabs variant='soft-rounded' colorScheme='gray' isLazy>
        <TabList>
          {WEBSITE.map((tab, index) => <Tab key={index}>{tab.title}</Tab>)}
        </TabList>
        <TabPanels>
          {WEBSITE.map((tab, index) => (
            <TabPanel key={index}>
              <Search engine={tab.engine} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
}

export default SearchTab;
