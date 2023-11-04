import React, { useContext, useEffect } from 'react';
import {
  CodenumberContext,
  CodenameContext,
  OnCameraContext,
} from '../../provider/ContextProviders';
import axios from 'axios';

export const Inputnum = () => {
  const [num, setNum] = useContext(CodenumberContext);
  const [, setCodename] = useContext(CodenameContext);
  const [OnCamera, setOnCamera] = useContext(OnCameraContext);

  useEffect(() => {
    const url = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${
      import.meta.env.VITE_APPID
    }&jan_code=${num}&results=1`;
    axios
      .get(url)
      .then((results) => {
        console.log(results.data.hits[0].name);
        if (results.data.hits[0].name == undefined) {
          setCodename('');
        } else {
          setCodename(results.data.hits[0].name);
        }
      })
      .catch((error) => {
        console.log(error.status);
      });
  }, [OnCamera]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOnCamera(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" defaultValue={num} onChange={(e) => setNum(e.target.value)} />
      <input type="submit" />
    </form>
  );
};
