import { useContext } from 'react';
import { CodenumberContext } from '../../provider/ContextProviders';
import { Scanner } from './Scancode';

export const Scannum = () => {
  const [, setNum] = useContext(CodenumberContext);

  return (
    <Scanner
      onReadCode={(result) => {
        setNum(result.getText());
      }}
    />
  );
};
