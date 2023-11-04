import Wolf from '../../assets/image/enemy/Wolf.png';

export const FightWolf = () => {
  const imgStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    right: '0px',
    bottom: '5%',
  };
  return <img src={`${Wolf}`} alt="Wolf" style={imgStyle} />;
};
