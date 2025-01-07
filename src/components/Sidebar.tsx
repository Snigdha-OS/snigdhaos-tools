import React, { useState } from 'react';
import { Search, FolderOpen } from 'lucide-react';
import { kaliTools } from '../data/tools';

interface SidebarProps {
  selectedTool: string | null;
  onSelectTool: (toolName: string) => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedTool, onSelectTool, isOpen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = Array.from(new Set(kaliTools.map(tool => tool.category)));

  const filteredTools = kaliTools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCategories = categories.filter(category =>
    filteredTools.some(tool => tool.category === category)
  );

  return (
    <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-dark-200 transform transition-all duration-300 ease-in-out ${
      isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'
    } overflow-hidden border-r border-dark-300 shadow-xl`}>
      <div className="h-full overflow-y-auto p-4">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-primary" />
          <input
            type="text"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-dark-300 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-nord-4 placeholder-primary/50 transition-colors duration-200 border border-dark-400"
          />
        </div>

        <div className="space-y-6">
          {filteredCategories.map(category => (
            <div key={category} className="transform transition-all duration-300 hover:translate-x-2">
              <h2 className="flex items-center gap-2 text-primary text-sm font-semibold mb-3">
                <FolderOpen className="w-4 h-4" />
                {category}
              </h2>
              <ul className="space-y-1">
                {filteredTools
                  .filter(tool => tool.category === category)
                  .map(tool => (
                    <li key={tool.name}>
                      <button
                        onClick={() => onSelectTool(tool.name)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                          selectedTool === tool.name
                            ? 'bg-primary text-nord-6 transform scale-105 shadow-md'
                            : 'hover:bg-dark-300 text-nord-4 hover:translate-x-1'
                        }`}
                      >
                        {tool.name}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;