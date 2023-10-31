import { useNavigate } from 'react-router';
import { PageLayout } from '../styles/PageLayout';
import { Box, Container, IconButton, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MainManuButton } from '../conponents/MainMenu/MainManuButton';
import { useState } from 'react';
import { ChoiceDungeon } from '../conponents/MainMenu/ChoiceDungeon';

export const MainMenu = () => {
  const [selectAdventure, setSelectAdventure] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <PageLayout>
      <Box sx={{ width: '100%', height: '100%', backgroundColor: '#E8D7D7' }}>
        <Box sx={{ width: '100%', height: '8%', backgroundColor: '#CA9A8B' }}>
          <IconButton
            aria-label="ArrowBack"
            size="large"
            onClick={() => {
              navigate('/');
            }}
            sx={{ height: '100%' }}
          >
            <ArrowBackIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Box sx={{ width: '100%', height: '7%' }} />
        <Grid container sx={{ width: '100%', height: '28%', spacing: '0' }}>
          <Grid item xs={6}>
            chara
          </Grid>
          <Grid item xs={6}>
            buki
          </Grid>
        </Grid>
        <Container sx={{ width: '100%', height: '12%' }} />
        <Box sx={{ width: '100%', height: '45%', backgroundColor: '#A8795F' }}>
          {selectAdventure ? (
            <ChoiceDungeon setSelectAdventure={setSelectAdventure} />
          ) : (
            <MainManuButton setSelectAdventure={setSelectAdventure} />
          )}
        </Box>
      </Box>
    </PageLayout>
  );
};
