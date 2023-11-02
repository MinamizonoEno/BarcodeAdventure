import { Box, Grid } from '@mui/material';
import { PageLayout } from '../styles/PageLayout';
import { AttackAction } from '../conponents/Dungeon/AttackAction';
import { ViewCharacterStatus } from '../conponents/Dungeon/ViewCharacterStatus';
import dungeonBgImg from '../assets/image/backgroundimg/dungeonBgImg.png';

export const BeginnerDungeon = () => {
  return (
    <PageLayout>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${dungeonBgImg})`,
          backgroundSize: 'cover',
        }}
      >
        <Box sx={{ height: '63%' }}></Box>
        <Box sx={{ height: '37%', backgroundColor: '#5C3737' }}>
          <Box sx={{ height: '10%' }} />
          <Box sx={{ height: '90%', backgroundColor: '#E8D7D7' }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              wrap="wrap"
              sx={{ width: '100%', height: '100%' }}
            >
              <Grid item xs={5} sx={{ width: '100%', height: '100%' }}>
                <ViewCharacterStatus />
              </Grid>
              <Grid item xs={7} sx={{ width: '100%', height: '100%' }}>
                <AttackAction />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
};
