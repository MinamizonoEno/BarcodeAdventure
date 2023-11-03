import slime from '../../assets/image/enemy/slime.png';
export const FightEnemy = () => {
  const imgStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    right: '0px',
    bottom: '5%',
  };
  return <img src={`${slime}`} alt="slime" style={imgStyle} />;
};
