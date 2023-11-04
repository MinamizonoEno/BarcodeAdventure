import { Box, Button, Container, Typography } from '@mui/material';
import { FC } from 'react';
import hand_guu from '../../assets/image/logo/hand_guu.png';
import hand_tyoki from '../../assets/image/logo/hand_cyoki.png';
import hand_paa from '../../assets/image/logo/hand_paa.png';

type Props = {
  setCharacterSerif: React.Dispatch<React.SetStateAction<number>>;
  setEnemySerifNum: React.Dispatch<React.SetStateAction<number>>;
  Guu: (enemyNum: number) => void;
  Cyoki: (enemyNum: number) => void;
  Paa: (enemyNum: number) => void;
};

export const AttackAction: FC<Props> = ({
  setCharacterSerif,
  setEnemySerifNum,
  Guu,
  Cyoki,
  Paa,
}) => {
  const imgStyle: React.CSSProperties = {
    width: 'auto',
    height: '100%',
    position: 'absolute',
    left: '0px',
    bottom: '5%',
  };
  return (
    <>
      <Container
        sx={{
          height: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          wrap: 'wrap',
          whiteSpace: 'nowrap',
        }}
      >
        <Box
          sx={{
            height: '100%',
            paddingTop: '3%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Button
            variant="contained"
            sx={{
              height: '30%',
              width: '100%',
              backgroundColor: '#fff',
              marginTop: '3%',
              color: '#000',
              position: 'relative',
              ':active': {
                backgroundColor: '#aaa',
              },
              ':hover': {
                backgroundColor: '#fff',
              },
            }}
            onClick={async () => {
              const enemyNum = Math.floor(Math.random() * (5 - 2) + 2);
              await setCharacterSerif(2);
              await setEnemySerifNum(enemyNum);
              await new Promise((resolve) => setTimeout(resolve, 1000));
              await Guu(enemyNum);
            }}
          >
            <img src={`${hand_guu}`} alt="グー" style={imgStyle} />
            <Typography sx={{ fontSize: '2rem' }}>グー</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              height: '30%',
              width: '100%',
              backgroundColor: '#fff',
              marginTop: '3%',
              color: '#000',
              position: 'relative',
              ':active': {
                backgroundColor: '#aaa',
              },
              ':hover': {
                backgroundColor: '#fff',
              },
            }}
            onClick={async () => {
              const enemyNum = Math.floor(Math.random() * (5 - 2) + 2);
              await setCharacterSerif(3);
              await setEnemySerifNum(enemyNum);
              await new Promise((resolve) => setTimeout(resolve, 1000));
              await Cyoki(enemyNum);
            }}
          >
            <img src={`${hand_tyoki}`} alt="チョキ" style={imgStyle} />

            <Typography sx={{ fontSize: '2rem' }}>チョキ</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              height: '30%',
              width: '100%',
              backgroundColor: '#fff',
              marginTop: '3%',
              color: '#000',
              position: 'relative',
              ':active': {
                backgroundColor: '#aaa',
              },
              ':hover': {
                backgroundColor: '#fff',
              },
            }}
            onClick={async () => {
              const enemyNum = Math.floor(Math.random() * (5 - 2) + 2);
              await setCharacterSerif(4);
              await setEnemySerifNum(enemyNum);
              await new Promise((resolve) => setTimeout(resolve, 1000));
              await Paa(enemyNum);
            }}
          >
            <img src={`${hand_paa}`} alt="パー" style={imgStyle} />
            <Typography sx={{ fontSize: '2rem' }}>パー</Typography>
          </Button>
        </Box>
      </Container>
    </>
  );
};
