import { Container, Box, Typography, Button } from '@mui/material';
import { FC } from 'react';

type Props = {
  setOpenAttackMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setCharacterSerif: React.Dispatch<React.SetStateAction<number>>;
  setEnemySerifNum: React.Dispatch<React.SetStateAction<number>>;
};

export const FightButton: FC<Props> = ({
  setOpenAttackMenu,
  setCharacterSerif,
  setEnemySerifNum,
}) => {
  return (
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
            height: '100%',
            bgcolor: '#C69A67',
            ':hover': {
              backgroundColor: '#C69A67',
            },
          }}
          onClick={() => {
            setCharacterSerif(1);
            setEnemySerifNum(1);
            setOpenAttackMenu(true);
          }}
        >
          <Typography sx={{ fontSize: '1.8rem' }}>ジャンケン</Typography>
        </Button>
      </Box>
    </Container>
  );
};
