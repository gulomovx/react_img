'use client';
import React, { useState, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';
import 'tailwindcss/tailwind.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // VS Code dark theme

function App() {
  const [code, setCode] = useState('// Write your code here');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [fontColor, setFontColor] = useState('#000000');
  const [fontSize, setFontSize] = useState(16);
  const [language, setLanguage] = useState('javascript'); // Allow selecting language
  const codeRef = useRef(null);

  const handleExportImage = () => {
    htmlToImage
      .toPng(codeRef.current)
      .then((dataUrl) => {
        saveAs(dataUrl, 'code-image.png');
      })
      .catch((err) => {
        console.error('Error generating image:', err);
      });
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-8 min-h-screen bg-gray-100">
      <h1 className="text-2xl sm:text-3xl text-slate-700 mb-6 text-center">
        Code to Image Generator
      </h1>

      {/* Code Input */}
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full sm:w-2/3 lg:w-1/2 p-3 h-32 sm:h-48 mb-4 border rounded-md shadow-sm"
        placeholder="Enter your code here..."
      />

      {/* Export Button */}
      <button
        onClick={handleExportImage}
        className="bg-blue-500 mb-4 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700"
      >
        Export as Image
      </button>

      {/* Code Preview (Styled Block) */}
      <div
        ref={codeRef} // Use ref on the wrapping div
        className="p-4 sm:p-8 w-full sm:w-2/3 lg:w-1/2 bg-slate-800 rounded-lg"
        style={{
          // backgroundColor: bgColor,
          color: fontColor,
          fontSize: `${fontSize}px`,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '12px',
        }}
      >
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus} // VS Code-like theme
          customStyle={{
            backgroundColor: 'transparent', // Use background from surrounding div
            color: fontColor,
            fontSize: `${fontSize}px`,
            padding: '16px',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default App;
