import { useContext, useEffect } from 'react';
import {
  RandnumContext,
  WeaponTypeContext,
  CodenameContext,
  WeaponContext,
  NameContext,
} from '../../provider/ContextProviders';
import barcodeReader from '../../assets/image/weapon/barcodeReader.png';
import kugibatto from '../../assets/image/weapon/kugibatto.png';
import morningStar from '../../assets/image/weapon/morningStar.png';
import sord from '../../assets/image/weapon/sord.png';
import staff from '../../assets/image/weapon/staff.png';
import branch from '../../assets/image/weapon/branch.png';

export const Nameming = () => {
  const [name, setname] = useContext(NameContext);
  const [codename] = useContext(CodenameContext);
  const [Weapon, setWeapon] = useContext(WeaponContext);
  const [, setWeaponType] = useContext(WeaponTypeContext);
  const [randnum, setRandnum] = useContext(RandnumContext);

  useEffect(() => {
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
  }, [codename]);

  useEffect(() => {
    setname(codename.slice(0, 6) + Weapon);
  }, [Weapon]);

  return <>{name}</>;
};
