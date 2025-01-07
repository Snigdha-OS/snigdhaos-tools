import React from 'react';
import { Tool } from '../data/tools';
import { Terminal, BookOpen, Command, Copy, Check, ExternalLink } from 'lucide-react';

interface ToolDetailsProps {
  tool: Tool;
}

const ToolDetails: React.FC<ToolDetailsProps> = ({ tool }) => {
  const [copiedStates, setCopiedStates] = React.useState<{[key: string]: boolean}>({});

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto mt-16">
      <div className="mb-8 bg-dark-200 rounded-lg p-8 shadow-lg transform hover:scale-[1.01] transition-all duration-300">
        <h1 className="text-4xl font-bold mb-4 text-primary flex items-center gap-3">
          {tool.name}
          <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
            {tool.category}
          </span>
        </h1>
        <p className="text-nord-4 text-lg leading-relaxed">{tool.description}</p>
      </div>

      <div className="space-y-8">
        <section className="bg-dark-200 rounded-lg p-6 shadow-lg transform hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-primary">Installation</h2>
          </div>
          <div className="bg-dark-300 rounded-lg p-4 hover:bg-dark-400 transition-colors duration-200 relative group border border-dark-400">
            <code className="text-nord-13 font-mono">{tool.installation}</code>
            <button
              onClick={() => copyToClipboard(tool.installation, 'installation')}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md opacity-0 group-hover:opacity-100 hover:bg-dark-300 transition-all duration-200"
              title="Copy to clipboard"
            >
              {copiedStates['installation'] ? (
                <Check className="w-4 h-4 text-nord-14" />
              ) : (
                <Copy className="w-4 h-4 text-nord-4" />
              )}
            </button>
          </div>
        </section>

        <section className="bg-dark-200 rounded-lg p-6 shadow-lg transform hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-primary">Usage</h2>
          </div>
          <ul className="space-y-3">
            {tool.usage.map((use, index) => (
              <li key={index} className="flex items-start gap-2 text-nord-4 hover:text-nord-6 transition-colors duration-200">
                <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <span className="leading-relaxed">{use}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-dark-200 rounded-lg p-6 shadow-lg transform hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Command className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-primary">Commands</h2>
          </div>
          <div className="space-y-6">
            {tool.commands.map((cmd, index) => (
              <div key={index} className="border border-dark-400 rounded-lg p-4 hover:border-primary transition-colors duration-200 bg-gradient-to-br from-transparent to-dark-300/30">
                <div className="bg-dark-300 rounded-md p-3 mb-3 hover:bg-dark-400 transition-colors duration-200 relative group border border-dark-400">
                  <code className="text-nord-14 font-mono">{cmd.command}</code>
                  <button
                    onClick={() => copyToClipboard(cmd.command, `cmd-${index}`)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md opacity-0 group-hover:opacity-100 hover:bg-dark-300 transition-all duration-200"
                    title="Copy command"
                  >
                    {copiedStates[`cmd-${index}`] ? (
                      <Check className="w-4 h-4 text-nord-14" />
                    ) : (
                      <Copy className="w-4 h-4 text-nord-4" />
                    )}
                  </button>
                </div>
                <p className="text-nord-4 mb-3 pl-2 border-l-2 border-primary">{cmd.description}</p>
                {cmd.example && (
                  <div className="bg-dark-300 rounded-md p-3 hover:bg-dark-400 transition-colors duration-200 relative group border border-dark-400">
                    <code className="text-nord-13 font-mono">Example: {cmd.example}</code>
                    <button
                      onClick={() => copyToClipboard(cmd.example!, `example-${index}`)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md opacity-0 group-hover:opacity-100 hover:bg-dark-300 transition-all duration-200"
                      title="Copy example"
                    >
                      {copiedStates[`example-${index}`] ? (
                        <Check className="w-4 h-4 text-nord-14" />
                      ) : (
                        <Copy className="w-4 h-4 text-nord-4" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ToolDetails;