import { PageLayout } from '../styles/PageLayout';
import { Box, Container, Grid } from '@mui/material';
import { MainManuButton } from '../conponents/MainMenu/MainManuButton';
import { MenuAppBar } from '../conponents/MainMenu/MenuAppBar';
import { useState } from 'react';
import { ChoiceDungeon } from '../conponents/MainMenu/ChoiceDungeon';
import { AwaitCharacter } from '../conponents/MainMenu/AwaitCharacter';
import { EquipWeapon } from '../conponents/EquipWeapon';
import { TalkBox } from '../conponents/MainMenu/TalkBox';

export const MainMenu = () => {
  const [selectAdventure, setSelectAdventure] = useState<boolean>(false);
  return (
    <PageLayout>
      <Box sx={{ width: '100%', height: '100%', backgroundColor: '#E8D7D7' }}>
        <MenuAppBar />
        <TalkBox />
        <Grid container sx={{ width: '100%', height: '28%', spacing: '0' }}>
          <Grid item xs={6}>
            <AwaitCharacter />
          </Grid>
          <Grid item xs={6}>
            <EquipWeapon />
          </Grid>
        </Grid>
        <Container sx={{ width: '100%', height: '4%' }} />
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
