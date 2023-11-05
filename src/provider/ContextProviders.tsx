import { FC, createContext, useState } from 'react';
import branch from '../assets/image/weapon/branch.png';

type Props = {
  children: React.ReactNode;
};

type StringContextType = [state: string, setState: React.Dispatch<React.SetStateAction<string>>];
type NumberContextType = [state: number, setState: React.Dispatch<React.SetStateAction<number>>];
type BooleanContextType = [state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>];

//読み取った数字を保持するコンテキスト
export const CodenumberContext = createContext<StringContextType>({} as StringContextType);
//商品名を保持するコンテキスト
export const CodenameContext = createContext<StringContextType>({} as StringContextType);
//武器の種類を保持するコンテキスト
export const WeaponTypeContext = createContext<StringContextType>({} as StringContextType);
//武器を保持するコンテキスト
export const WeaponContext = createContext<StringContextType>({} as StringContextType);
//武器の名前を保持するコンテキスト
export const NameContext = createContext<StringContextType>({} as StringContextType);
//ランダムな数字を保持するコンテキスト
export const RandnumContext = createContext<NumberContextType>({} as NumberContextType);
// カメラの状態を保持するコンテキスト
export const OnCameraContext = createContext<BooleanContextType>({} as BooleanContextType);

export const ContextProviders: FC<Props> = ({ children }) => {
  //読み取った数字を保持するコンテキスト
  const [num, setNum] = useState('');
  //商品名を保持するコンテキスト
  const [codename, setCodename] = useState('');
  //武器の種類を保持するステート
  const [WeaponType, setWeaponType] = useState(branch);
  //武器を保持するステート
  const [Weapon, setWeapon] = useState('木の棒');
  //武器の名前を保持するステート
  const [name, setName] = useState('木の棒');
  //ランダムな数字を保持するステート
  const [randnum, setRandnum] = useState(0);
  // カメラの状態を保持するステート
  const [onCamera, setOnCamera] = useState(false);

  return (
    <CodenumberContext.Provider value={[num, setNum]}>
      <CodenameContext.Provider value={[codename, setCodename]}>
        <WeaponTypeContext.Provider value={[WeaponType, setWeaponType]}>
          <WeaponContext.Provider value={[Weapon, setWeapon]}>
            <NameContext.Provider value={[name, setName]}>
              <RandnumContext.Provider value={[randnum, setRandnum]}>
                <OnCameraContext.Provider value={[onCamera, setOnCamera]}>
                  {children}
                </OnCameraContext.Provider>
              </RandnumContext.Provider>
            </NameContext.Provider>
          </WeaponContext.Provider>
        </WeaponTypeContext.Provider>
      </CodenameContext.Provider>
    </CodenumberContext.Provider>
  );
};
