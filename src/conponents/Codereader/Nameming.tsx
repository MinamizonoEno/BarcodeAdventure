import { useContext, useEffect } from 'react';
import { CodenameContext, WeaponContext, NameContext } from '../../provider/ContextProviders';

export const Nameming = () => {
  const [name, setname] = useContext(NameContext);
  const [codename] = useContext(CodenameContext);
  const [Weapon] = useContext(WeaponContext);

  useEffect(() => {
    setname(codename.slice(0, 6) + Weapon);
  }, [Weapon]);

  return <>{name}</>;
};
