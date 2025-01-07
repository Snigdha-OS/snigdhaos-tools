import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-200 border-t border-dark-300 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-nord-11 animate-pulse" />
            <span>for the security community</span>
          </div>
          <div className="text-sm text-nord-4">
            © {new Date().getFullYear()} Snigdha OS Tools. All rights reserved.Powered by <b className='hover:text-primary'>TONMOY INFRASTRUCTURE™.</b>
          </div>
          <div className="flex items-center space-x-3 text-sm text-nord-4">
            <span>Developed by</span>
            <a 
              href="https://github.com/eshanized" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-primary transition-colors duration-200 group"
            >
              <span className="text-primary">eshanized</span>
              <img 
                src="https://github.com/eshanized.png" 
                alt="eshanized" 
                className="w-8 h-8 rounded-full border-2 border-transparent group-hover:border-primary transition-all duration-200 shadow-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;