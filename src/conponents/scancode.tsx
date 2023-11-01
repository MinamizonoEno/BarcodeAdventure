import { useState, useEffect } from 'react';
import Scanner from './scannum';
import axios from 'axios';

const Scancode = () => {
  const [codes, setCodes] = useState<string[]>([]);
  const [codename, serCodename] = useState<string[]>([]);

  const codenames = codename.map((array) => {
    return array;
  });

  useEffect(() => {
    codes.map((array) => {
      const url = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${
        import.meta.env.VITE_APPID
      }&jan_code=${array}&results=1`;
      axios
        .get(url)
        .then((results) => {
          console.log(results.data.hits[0].name);
          serCodename((codename) => Array.from(new Set([...codename, results.data.hits[0].name])));
        })
        .catch((error) => {
          console.log(error.status);
        });
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
      <div>{codenames}</div>
    </div>
  );
};

export default Scancode;
