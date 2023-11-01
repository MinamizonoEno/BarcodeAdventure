import { useState, useEffect } from 'react';
import Scanner from './scannum';
import axios from 'axios';

const Scancode = () => {
  const [codes, setCodes] = useState<string[]>([]);
  const [codename, setCodename] = useState<string[]>([]);
  const [codenames, setCodenames] = useState<string[]>([]);
  useEffect(() => {
    codes.map((array) => {
      const url = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${
        import.meta.env.VITE_APPID
      }&jan_code=${array}&results=1`;
      axios
        .get(url)
        .then((results) => {
          console.log(results.data.hits[0].name);
          setCodename((codename) => Array.from(new Set([...codename, results.data.hits[0].name])));
        })
        .catch((error) => {
          console.log(error.status);
        });
    });
  }, [codes]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCodenames(codename);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Scanner
        onReadCode={(result) => {
          setCodes((codes) => Array.from(new Set([...codes, result.getText()])));
        }}
      />
      <textarea defaultValue={codes.join('\n')} />
      <ul>
        {codenames.map((out, i) => (
          <li key={i}>{out}</li>
        ))}
      </ul>
      <input type="submit" />
    </form>
  );
};

export default Scancode;
