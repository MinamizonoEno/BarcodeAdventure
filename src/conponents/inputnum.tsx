import React, { useState } from 'react';
import axios from 'axios';

const Inputnum = () => {
  const [data, setData] = useState('');

  const settingnum = (props: string) => {
    const code = props;
    const url = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${
      import.meta.env.VITE_APPID
    }&jan_code=${code}&results=1`;
    axios
      .get(url)
      .then((results) => {
        console.log(results.data.hits[0].name);
        setData(results.data.hits[0].name);
      })
      .catch((error) => {
        console.log(error.status);
      });
  };

  const [num, setNum] = useState('0');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    settingnum(num);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" defaultValue={num} onChange={(e) => setNum(e.target.value)} />
      <input type="submit" />
      <div>{data}</div>
    </form>
  );
};

export default Inputnum;