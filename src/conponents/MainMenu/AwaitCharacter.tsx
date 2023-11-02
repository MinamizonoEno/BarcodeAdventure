import cordchan_fightStart from '../../assets/image/cordchan/cordchan_fightStart.png';

export const AwaitCharacter = () => {
  const imgStyle: React.CSSProperties = {
    width: '80%',
    height: 'auto',
    marginLeft: '10%',
    marginRight: '10%',
  };
  return (
    <>
      <img src={`${cordchan_fightStart}`} alt="Character" style={imgStyle} />
    </>
  );
};
