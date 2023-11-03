import cordchan_await01 from '../../assets/image/cordchan/cordchan_await01.png';

export const AwaitCharacter = () => {
  const imgStyle: React.CSSProperties = {
    width: '80%',
    height: 'auto',
    marginLeft: '10%',
    marginRight: '10%',
  };
  return (
    <>
      <img src={`${cordchan_await01}`} alt="Character" style={imgStyle} />
    </>
  );
};
