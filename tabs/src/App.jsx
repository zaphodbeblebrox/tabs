import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import TabContent from './components/TabContent';

function App() {
  const [tabs, setTabs] = useState([{"label":"Tab 1", "content":"Tab 1 content is showing here."},
                                    {"label":"Tab 2", "content":"Tab 2 content is showing here."},
                                    {"label":"Tab 3", "content":"Tab 3 content is showing here."}]);
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  return (
    <div className="App flex-column centered">
      <Tabs tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TabContent tabs={tabs} selectedTab={selectedTab}/>
    </div>
  );
}

export default App;
