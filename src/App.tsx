import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToolDetails from './components/ToolDetails';
import { kaliTools } from './data/tools';

function App() {
  const [selectedTool, setSelectedTool] = useState<string | null>(kaliTools[0].name);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const currentTool = kaliTools.find(tool => tool.name === selectedTool);

  return (
    <div className="flex flex-col min-h-screen bg-dark-100 text-nord-4">
      <Navbar isSidebarOpen={isSidebarOpen} onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1">
        <Sidebar 
          selectedTool={selectedTool} 
          onSelectTool={setSelectedTool}
          isOpen={isSidebarOpen}
        />
        <main className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
          {currentTool && <ToolDetails tool={currentTool} />}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;