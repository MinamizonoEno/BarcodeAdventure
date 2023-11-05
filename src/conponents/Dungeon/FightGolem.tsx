import Golem from '../../assets/image/enemy/golem.png';

export const FightGolem = () => {
  const imgStyle: React.CSSProperties = {
    width: '110%',
    height: 'auto',
    position: 'absolute',
    right: '0px',
    bottom: '5%',
  };
  return <img src={`${Golem}`} alt="Golem" style={imgStyle} />;
};
