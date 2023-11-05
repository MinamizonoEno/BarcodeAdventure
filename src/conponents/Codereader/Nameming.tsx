import { useContext, useEffect } from 'react';
import { CodenameContext, WeaponContext, NameContext } from '../../provider/ContextProviders';
import { Typography } from '@mui/material';

export const Nameming = () => {
  const [name, setname] = useContext(NameContext);
  const [codename] = useContext(CodenameContext);
  const [Weapon] = useContext(WeaponContext);

  useEffect(() => {
    setname(codename.slice(0, 6) + Weapon);
  }, [Weapon, codename, setname]);

  return (
    <Typography
      sx={{
        position: 'absolute',
        left: '25%',
        right: '15%',
        top: '17%',
        fontSize: '1.5rem',
        color: '#fff',
      }}
    >
      {name}
    </Typography>
  );
};
