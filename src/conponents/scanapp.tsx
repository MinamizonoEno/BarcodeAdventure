import { useState, useEffect } from 'react';
import Scanner from './scannum';
import axios from 'axios';

const Scanapp = () => {
  const [codes, setCodes] = useState<string[]>([]);
  useEffect(() => {
    const code = codes;
    const url = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${
      import.meta.env.VITE_APPID
    }&jan_code=${code}&results=1`;
    axios
      .get(url)
      .then((results) => {
        console.log(results.data.hits.name);
      })
      .catch((error) => {
        console.log(error.status);
      });
  }, [codes]);
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
