import { Box, Button, Container, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  setCharacterSerif: React.Dispatch<React.SetStateAction<number>>;
  setSlimeSerif: React.Dispatch<React.SetStateAction<number>>;
  Guu: (enemyNum: number) => void;
  Cyoki: (enemyNum: number) => void;
  Paa: (enemyNum: number) => void;
};

export const AttackAction: FC<Props> = ({ setCharacterSerif, setSlimeSerif, Guu, Cyoki, Paa }) => {
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
              await setSlimeSerif(enemyNum);
              await new Promise((resolve) => setTimeout(resolve, 1000));
              await Guu(enemyNum);
            }}
          >
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
              await setSlimeSerif(enemyNum);
              await new Promise((resolve) => setTimeout(resolve, 1000));
              await Cyoki(enemyNum);
            }}
          >
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
              await setSlimeSerif(enemyNum);
              await new Promise((resolve) => setTimeout(resolve, 1000));
              await Paa(enemyNum);
            }}
          >
            <Typography sx={{ fontSize: '2rem' }}>パー</Typography>
          </Button>
        </Box>
      </Container>
    </>
  );
};
