import { FC, createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type StringContextType = [state: string, setState: React.Dispatch<React.SetStateAction<string>>];

//読み取った数字を保持するコンテキスト
export const CodenumberContext = createContext<StringContextType>({} as StringContextType);
//商品名を保持するコンテキスト
export const CodenameContext = createContext<StringContextType>({} as StringContextType);

export const ContextProviders: FC<Props> = ({ children }) => {
  //読み取った数字を保持するコンテキスト
  const [num, setNum] = useState('');
  //商品名を保持するコンテキスト
  const [codename, setCodename] = useState('');

  return (
    <CodenumberContext.Provider value={[num, setNum]}>
      <CodenameContext.Provider value={[codename, setCodename]}>
        {children}
      </CodenameContext.Provider>
    </CodenumberContext.Provider>
  );
};
