import { Box, Container, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router';

type Props = {
  setSelectAdventure: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ChoiceDungeon: FC<Props> = ({ setSelectAdventure }) => {
  const navigate = useNavigate();
  const Level = [
    { title: '初級', click: true, nav: '/BeginnerDungeon', state: false },
    { title: '中級', click: true, nav: '', state: true },
    { title: '上級', click: true, nav: '', state: true },
    { title: '戻る', click: false, nav: '', state: false },
  ];
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
          {Level.map((item) => (
            <Button
              variant="contained"
              disabled={item.state}
              key={item.title}
              sx={{
                height: '30%',
                width: '100%',
                backgroundColor: '#fff',
                marginTop: '3%',
                color: '#000',
              }}
              onClick={() => {
                setSelectAdventure(item.click);
                navigate(item.nav);
              }}
            >
              <Typography sx={{ fontSize: '2rem' }}>{item.title}</Typography>
            </Button>
          ))}
        </Box>
      </Container>
    </>
  );
};
