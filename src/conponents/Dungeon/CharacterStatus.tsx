import { useContext } from 'react';
import { WeaponTypeContext, NameContext } from '../../provider/ContextProviders';
import { Typography } from '@mui/material';

export const ViewCharacterStatus = () => {
  const [WeaponType] = useContext(WeaponTypeContext);
  const [name] = useContext(NameContext);
  return (
    <>
      <img
        src={WeaponType}
        alt="武器画像"
        style={{ position: 'absolute', height: '30%', top: '70%', left: '9%' }}
      />
      <Typography
        sx={{
          position: 'absolute',
          left: '1%',
          top: '92%',
          fontSize: '14px',
          color: '#fff',
        }}
      >
        {name}
      </Typography>
    </>
  );
};
