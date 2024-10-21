import React from 'react';
import Block from './Block';

const Example = () => {
  const code = `
    const greeting = 'Hello, world!';
    console.log(greeting);
  `;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Code Highlighting Example</h1>
      <Block language="javascript" code={code} />
    </div>
  );
};

export default Example;
