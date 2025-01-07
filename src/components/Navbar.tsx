import React from 'react';
import { Menu, Terminal, Github, Coffee } from 'lucide-react';

interface NavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, onToggleSidebar }) => {
  return (
    <nav className="bg-dark-200 border-b border-dark-300 fixed w-full z-10 shadow-lg">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={onToggleSidebar}
              className="p-2 rounded-md hover:bg-dark-300 transition-colors duration-200"
              title={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              <Menu className={`w-6 h-6 text-primary transform transition-transform duration-300 ${
                isSidebarOpen ? 'rotate-0' : 'rotate-180'
              }`} />
            </button>
            <div className="flex items-center ml-4">
              <Terminal className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-nord-6">Snigdha OS Tools</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Snigdha-OS"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-dark-300 transition-colors duration-200 group"
              title="View on GitHub"
            >
              <Github className="w-6 h-6 text-nord-4 group-hover:text-primary transition-colors duration-200" />
            </a>
            <a
              href="https://snigdha-os.github.io/documentation/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-dark-300 transition-colors duration-200 group"
              title="Documentation"
            >
              <Coffee className="w-6 h-6 text-nord-4 group-hover:text-primary transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
