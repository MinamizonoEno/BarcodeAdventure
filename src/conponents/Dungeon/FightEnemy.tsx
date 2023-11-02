import cordchan_fightStart from '../../assets/image/cordchan/cordchan_fightStart.png';

export const FightEnemy = () => {
  const imgStyle: React.CSSProperties = {
    width: '70%',
    height: 'auto',
    position: 'absolute',
    right: '0px',
    bottom: '5%',
  };
  return <img src={`${cordchan_fightStart}`} alt="Character" style={imgStyle} />;
};
