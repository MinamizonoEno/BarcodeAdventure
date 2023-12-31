import React, { useContext } from 'react';
import {
  CodenumberContext,
  CodenameContext,
  RandnumContext,
  WeaponTypeContext,
  WeaponContext,
  NameContext,
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
  const [Weapon] = useContext(WeaponContext);
  const [codename] = useContext(CodenameContext);
  const [, setname] = useContext(NameContext);

  const getname = () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${num}`;
    axios
      .get(url)
      .then((results) => {
        console.log(results.data.items[0].volumeInfo.title);
        setCodename(results.data.items[0].volumeInfo.title);
        settingWeapon();
        settingName();
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
  const settingName = () => {
    setname(codename.slice(0, 6) + Weapon);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getname();
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
