import { useState } from 'react';
import Scanner from './scannum';

const Scanapp = () => {
  const [codes, setCodes] = useState<string[]>([]);
  return (
    <div>
      <Scanner
        onReadCode={(result) => {
          setCodes((codes) => Array.from(new Set([...codes, result.getText()])));
        }}
      />
      <textarea defaultValue={codes.join('\n')} />
    </div>
  );
};

export default Scanapp;
