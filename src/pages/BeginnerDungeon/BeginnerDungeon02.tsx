import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { PageLayout } from '../../styles/PageLayout';
import { AttackAction } from '../../conponents/Dungeon/AttackAction';
import { ViewCharacterStatus } from '../../conponents/Dungeon/CharacterStatus';
import dungeonBgImg from '../../assets/image/backgroundimg/dungeonBgImg.png';
import { DungeonAppber } from '../../conponents/Dungeon/DungeonAppber';
import { FightCharacter } from '../../conponents/Dungeon/FightCharacter';
import { FightEnemy } from '../../conponents/Dungeon/FightSlime';
import { SerifBox0101 } from '../../conponents/Dungeon/BeginnerDungeon/SerifBox0101';
import { FightButton } from '../../conponents/Dungeon/FightButton';
import { HPBar0101 } from '../../conponents/Dungeon/BeginnerDungeon/HPBar0101';
import { WinModal } from '../../conponents/Dungeon/BeginnerDungeon/WinModal';

export const BeginnerDungeon02 = () => {
  const [slimeHP, setSlimeHP] = useState<number>(100);
  const [characterHP, setCharacterHP] = useState<number>(150);
  const [slimeSerif, setSlimeSerif] = useState<number>(0);
  const [characterSerif, setCharacterSerif] = useState<number>(0);
  const [openAttackMenu, setOpenAttackMenu] = useState(false);
  const [openWinModal, setOpenWinModal] = useState(false);

  const JudgeDead = async (SlimeHP: number, CharacterHP: number) => {
    if (SlimeHP <= 0) {
      await setCharacterSerif(8);
      await setSlimeSerif(9);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setOpenWinModal(true);
    }
    if (CharacterHP <= 0) {
      null;
    }
  };

  const Guu = async (enemyNum: number) => {
    switch (enemyNum) {
      case 2:
        return (
          setCharacterSerif(5), setSlimeSerif(5), setOpenAttackMenu(false), setOpenAttackMenu(true)
        );
      case 3:
        return (
          await setCharacterSerif(6),
          await setSlimeSerif(7),
          await setSlimeHP(slimeHP - 30),
          await setOpenAttackMenu(false),
          JudgeDead(slimeHP - 30, characterHP)
        );
      case 4:
        return (
          await setCharacterSerif(7),
          await setSlimeSerif(6),
          await setCharacterHP(characterHP - 40),
          await setOpenAttackMenu(false),
          JudgeDead(slimeHP, characterHP - 40)
        );
    }
  };
  const Cyoki = async (enemyNum: number) => {
    switch (enemyNum) {
      case 2:
        return (
          await setCharacterSerif(7),
          await setSlimeSerif(6),
          await setCharacterHP(characterHP - 40),
          await setOpenAttackMenu(false),
          JudgeDead(slimeHP, characterHP - 40)
        );
      case 3:
        return (
          setCharacterSerif(5), setSlimeSerif(5), setOpenAttackMenu(false), setOpenAttackMenu(true)
        );
      case 4:
        return (
          await setCharacterSerif(6),
          await setSlimeSerif(7),
          await setSlimeHP(slimeHP - 30),
          await setOpenAttackMenu(false),
          JudgeDead(slimeHP - 30, characterHP)
        );
    }
  };
  const Paa = async (enemyNum: number) => {
    switch (enemyNum) {
      case 2:
        return (
          await setCharacterSerif(6),
          await setSlimeSerif(7),
          await setSlimeHP(slimeHP - 30),
          await setOpenAttackMenu(false),
          JudgeDead(slimeHP - 30, characterHP)
        );
      case 3:
        return (
          await setCharacterSerif(7),
          await setSlimeSerif(6),
          await setCharacterHP(characterHP - 40),
          await setOpenAttackMenu(false),
          JudgeDead(slimeHP, characterHP - 40)
        );
      case 4:
        return (
          setCharacterSerif(5), setSlimeSerif(5), setOpenAttackMenu(false), setOpenAttackMenu(true)
        );
    }
  };
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
        <WinModal openWinModal={openWinModal} />
        <Box sx={{ height: '63%' }}>
          <DungeonAppber />
          <Box sx={{ height: '7%' }} />
          <HPBar0101 characterHP={characterHP} slimeHP={slimeHP} />
          <SerifBox0101 slimeSerif={slimeSerif} characterSerif={characterSerif} />
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
              <Grid item xs={6} sx={{ width: '100%', height: '100%', position: 'relative' }}>
                <FightEnemy />
              </Grid>
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
                {openAttackMenu ? (
                  <AttackAction
                    setCharacterSerif={setCharacterSerif}
                    setSlimeSerif={setSlimeSerif}
                    Guu={Guu}
                    Cyoki={Cyoki}
                    Paa={Paa}
                  />
                ) : (
                  <FightButton
                    setOpenAttackMenu={setOpenAttackMenu}
                    setCharacterSerif={setCharacterSerif}
                    setSlimeSerif={setSlimeSerif}
                  />
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
};
