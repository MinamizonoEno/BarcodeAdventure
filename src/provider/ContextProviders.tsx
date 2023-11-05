import { FC, createContext, useState } from 'react';
import branch from '../assets/image/weapon/branch.png';

type Props = {
  children: React.ReactNode;
};

type StringContextType = [state: string, setState: React.Dispatch<React.SetStateAction<string>>];

//読み取った数字を保持するコンテキスト
export const CodenumberContext = createContext<StringContextType>({} as StringContextType);
//商品名を保持するコンテキスト
export const CodenameContext = createContext<StringContextType>({} as StringContextType);
//武器の種類を保持するコンテキスト
export const WeaponTypeContext = createContext<StringContextType>({} as StringContextType);

export const ContextProviders: FC<Props> = ({ children }) => {
  //読み取った数字を保持するコンテキスト
  const [num, setNum] = useState('');
  //商品名を保持するコンテキスト
  const [codename, setCodename] = useState('');
  //武器の種類を保持するステート
  const [WeaponType, setWeaponType] = useState(branch);

  return (
    <CodenumberContext.Provider value={[num, setNum]}>
      <CodenameContext.Provider value={[codename, setCodename]}>
        <WeaponTypeContext.Provider value={[WeaponType, setWeaponType]}>
          {children}
        </WeaponTypeContext.Provider>
      </CodenameContext.Provider>
    </CodenumberContext.Provider>
  );
};
