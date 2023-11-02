import { Box, Grid } from '@mui/material';
import { PageLayout } from '../styles/PageLayout';
import { AttackAction } from '../conponents/Dungeon/AttackAction';
import { ViewCharacterStatus } from '../conponents/Dungeon/ViewCharacterStatus';
import dungeonBgImg from '../assets/image/backgroundimg/dungeonBgImg.png';
import { DungeonAppber } from '../conponents/Dungeon/DungeonAppber';
import { FightCharacter } from '../conponents/Dungeon/FightCharacter';

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
        <Box sx={{ height: '63%' }}>
          <DungeonAppber />
          <Box sx={{ height: '7%' }} />
          <Box sx={{ height: '15%' }}>hp</Box>
          <Box sx={{ height: '30%' }} />
          <Box sx={{ height: '40%' }}>
            <Grid
              container
              spacing={0}
              direction="row"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              wrap="wrap"
              sx={{ width: '100%', height: '100%' }}
            >
              <Grid item xs={6} sx={{ width: '100%', height: '100%', position: 'relative' }}>
                <FightCharacter />
              </Grid>
              <Grid item xs={6} sx={{ width: '100%', height: '100%' }}></Grid>
            </Grid>
          </Box>
        </Box>
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
