import { useState } from 'react';
import './App.css';

function App() {
  const [tabs, setTabs] = useState([{"label":"Tab 1", "content":"Tab 1 content is showing here."},
                                    {"label":"Tab 2", "content":"Tab 2 content is showing here."},
                                    {"label":"Tab 3", "content":"Tab 3 content is showing here."}]);
  return (
    <div className="App">
      <div className="showTabs">
        <Tabs />
      </div>
      <TabContent />


    </div>
  );
}

export default App;
