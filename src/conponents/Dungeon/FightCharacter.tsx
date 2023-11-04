import { Box } from '@mui/material';
import cordchan_fightStart from '../../assets/image/cordchan/cordchan_fightStart.png';
import { useContext } from 'react';
import { WeaponTypeContext } from '../../provider/ContextProviders';
export const FightCharacter = () => {
  const [weaponType] = useContext(WeaponTypeContext);
  const imgStyle: React.CSSProperties = {
    width: '70%',
    height: 'auto',
    position: 'absolute',
    left: '0px',
    bottom: '5%',
  };
  const weaponStyle: React.CSSProperties = {
    width: '55%',
    height: 'auto',
    position: 'absolute',
    right: '-8%',
    bottom: '-10%',
  };
  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <img src={`${cordchan_fightStart}`} alt="Character" style={imgStyle} />
      <img src={`${weaponType}`} alt="武器画像" style={weaponStyle} />
    </Box>
  );
};
