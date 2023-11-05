import React, { useContext } from 'react';
import {
  CodenumberContext,
  CodenameContext,
  RandnumContext,
  WeaponTypeContext,
  WeaponContext,
} from '../../provider/ContextProviders';
import axios from 'axios';
import barcodeReader from '../../assets/image/weapon/barcodeReader.png';
import kugibatto from '../../assets/image/weapon/kugibatto.png';
import morningStar from '../../assets/image/weapon/morningStar.png';
import sord from '../../assets/image/weapon/sord.png';
import staff from '../../assets/image/weapon/staff.png';
import branch from '../../assets/image/weapon/branch.png';

export const Inputnum = () => {
  const [num, setNum] = useContext(CodenumberContext);
  const [, setCodename] = useContext(CodenameContext);
  const [, setWeapon] = useContext(WeaponContext);
  const [, setWeaponType] = useContext(WeaponTypeContext);
  const [randnum, setRandnum] = useContext(RandnumContext);

  const getname = () => {
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
  };
  const settingWeapon = () => {
    setRandnum(Math.floor(Math.random() * 5) + 1);
    switch (randnum) {
      case 1:
        setWeaponType(barcodeReader);
        setWeapon('バーコードリーダー');
        break;
      case 2:
        setWeaponType(kugibatto);
        setWeapon('釘バット');
        break;
      case 3:
        setWeaponType(morningStar);
        setWeapon('モーニングスター');
        break;
      case 4:
        setWeaponType(sord);
        setWeapon('剣');
        break;
      case 5:
        setWeaponType(staff);
        setWeapon('杖');
        break;
      default:
        setWeaponType(branch);
        setWeapon('木の棒');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getname();
    settingWeapon();
  };

  return (
    <form onSubmit={handleSubmit} style={{ position: 'absolute', left: '11%', top: '3%' }}>
      <input
        type="text"
        defaultValue={num}
        onChange={(e) => setNum(e.target.value)}
        style={{ fontSize: '16px', background: '#fff' }}
      />
      <input type="submit" value={'生成'} style={{ fontSize: '13px', background: '#fff' }} />
    </form>
  );
};
