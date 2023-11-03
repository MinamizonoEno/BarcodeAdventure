//  import barcodeReader from "../assets/image/weapon/barcodeReader.png"
//  import branch from "../assets/image/weapon/branch.png"
//  import kugibatto from "../assets/image/weapon/kugibatto.png"
//  import morningStar from "../assets/image/weapon/morningStar.png"
//  import sord from "../assets/image/weapon/sord.png"
//  import staff from "../assets/image/weapon/staff.png"
import { useContext } from 'react';
import { WeaponTypeContext } from '../provider/ContextProviders';

export const EquipWeapon = () => {
  const [weaponType] = useContext(WeaponTypeContext);
  const imgStyle: React.CSSProperties = {
    width: '50%',
    height: 'auto',
    marginLeft: '30%',
    marginRight: '10%',
  };
  return (
    <>
      <img src={`${weaponType}`} alt="武器画像" style={imgStyle} />
    </>
  );
};
