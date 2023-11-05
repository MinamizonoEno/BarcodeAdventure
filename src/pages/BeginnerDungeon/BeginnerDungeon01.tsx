import { useEffect, useState } from 'react';
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
import { WinModal0101 } from '../../conponents/Dungeon/BeginnerDungeon/WinModal0101';
import { LoseModal } from '../../conponents/Dungeon/BeginnerDungeon/LoseModal';
import { TutorialModal } from '../../conponents/Dungeon/BeginnerDungeon/TutorialModal';

export const BeginnerDungeon01 = () => {
  const [slimeHP, setSlimeHP] = useState<number>(100);
  const [characterHP, setCharacterHP] = useState<number>(150);
  const [enemySerifNum, setEnemySerifNum] = useState<number>(0);
  const [characterSerif, setCharacterSerif] = useState<number>(0);
  const [openAttackMenu, setOpenAttackMenu] = useState(false);
  const [openWinModal, setOpenWinModal] = useState(false);
  const [openLoseModal, setOpenLoseModal] = useState(false);
  const [openTutorialModal, setOpenTutorialModal] = useState(false);

  useEffect(() => {
    setOpenTutorialModal(true);
  }, []);

  const JudgeDead = async (SlimeHP: number, CharacterHP: number) => {
    if (SlimeHP <= 0) {
      await setCharacterSerif(8);
      await setEnemySerifNum(9);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setOpenWinModal(true);
    }
    if (CharacterHP <= 0) {
      await setCharacterSerif(9);
      await setEnemySerifNum(8);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setOpenLoseModal(true);
    }
  };

  const Guu = async (enemyNum: number) => {
    switch (enemyNum) {
      case 2:
        return (
          setCharacterSerif(5),
          setEnemySerifNum(5),
          setOpenAttackMenu(false),
          setOpenAttackMenu(true)
        );
      case 3:
        return (
          await setCharacterSerif(6),
          await setEnemySerifNum(7),
          await setSlimeHP(slimeHP - 35),
          await setOpenAttackMenu(false),
          JudgeDead(slimeHP - 35, characterHP)
        );
      case 4:
        return (
          await setCharacterSerif(7),
          await setEnemySerifNum(6),
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
          await setEnemySerifNum(6),
          await setCharacterHP(characterHP - 40),
          await setOpenAttackMenu(false),
          JudgeDead(slimeHP, characterHP - 40)
        );
      case 3:
        return (
          setCharacterSerif(5),
          setEnemySerifNum(5),
          setOpenAttackMenu(false),
          setOpenAttackMenu(true)
        );
      case 4:
        return (
          await setCharacterSerif(6),
          await setEnemySerifNum(7),
          await setSlimeHP(slimeHP - 35),
          await setOpenAttackMenu(false),
          JudgeDead(slimeHP - 35, characterHP)
        );
    }
  };
  const Paa = async (enemyNum: number) => {
    switch (enemyNum) {
      case 2:
        return (
          await setCharacterSerif(6),
          await setEnemySerifNum(7),
          await setSlimeHP(slimeHP - 35),
          await setOpenAttackMenu(false),
          JudgeDead(slimeHP - 35, characterHP)
        );
      case 3:
        return (
          await setCharacterSerif(7),
          await setEnemySerifNum(6),
          await setCharacterHP(characterHP - 40),
          await setOpenAttackMenu(false),
          JudgeDead(slimeHP, characterHP - 40)
        );
      case 4:
        return (
          setCharacterSerif(5),
          setEnemySerifNum(5),
          setOpenAttackMenu(false),
          setOpenAttackMenu(true)
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
          position: 'relative',
        }}
      >
        <WinModal0101 openWinModal={openWinModal} />
        <LoseModal openLoseModal={openLoseModal} />
        <TutorialModal
          openTutorialModal={openTutorialModal}
          setOpenTutorialModal={setOpenTutorialModal}
        />
        <Box sx={{ height: '63%' }}>
          <DungeonAppber />
          <Box sx={{ height: '7%' }} />
          <HPBar0101 characterHP={characterHP} slimeHP={slimeHP} />
          <SerifBox0101 enemySerifNum={enemySerifNum} characterSerif={characterSerif} />
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
                    setEnemySerifNum={setEnemySerifNum}
                    Guu={Guu}
                    Cyoki={Cyoki}
                    Paa={Paa}
                  />
                ) : (
                  <FightButton
                    setOpenAttackMenu={setOpenAttackMenu}
                    setCharacterSerif={setCharacterSerif}
                    setEnemySerifNum={setEnemySerifNum}
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
