import { Tabs } from '@arco-design/web-react';

import { WEBSITE } from '@/utils/constants';
import { useState } from 'react';
import Search from './Search';

const TabPane = Tabs.TabPane;

function SearchTab() {
  const [activeTab, setActiveTab] = useState('0');

  return (
    <Tabs
      activeTab={activeTab}
      type='rounded'
      onChange={setActiveTab}
    >
      {WEBSITE.map((tab, index) => (
        <TabPane destroyOnHide key={index} title={tab.title}>
          <Search engine={tab.engine} />
        </TabPane>
      ))}
    </Tabs>
  );
}

export default SearchTab;
