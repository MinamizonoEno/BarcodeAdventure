//バーコードリーダーのコンポーネント
import { useContext } from 'react';
import { CodenumberContext, CodenameContext } from '../provider/BR_ContextProviders';
import Scanner from './scannum';
import axios from 'axios';

export const Scancode = () => {
  const [num, setNum] = useContext(CodenumberContext);
  const [codename, setCodename] = useContext(CodenameContext);
  const geturl = () => {
    const url = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${
      import.meta.env.VITE_APPID
    }&jan_code=${num}&results=1`;
    axios
      .get(url)
      .then((results) => {
        console.log(results.data.hits[0].name);
        setCodename(results.data.hits[0].name);
      })
      .catch((error) => {
        console.log(error.status);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    geturl();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Scanner
        onReadCode={(result) => {
          setNum(result.getText());
        }}
      />
      <div>{codename}</div>
      <input type="submit" />
    </form>
  );
};
