import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; 

const Block = ({ language, code }) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} className="rounded-lg p-4 bg-gray-900">
      {code}
    </SyntaxHighlighter>
  );
};

export default Block;
