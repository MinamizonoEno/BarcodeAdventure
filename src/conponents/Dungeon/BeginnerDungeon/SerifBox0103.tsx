import { Box, Grid, Typography } from '@mui/material';
import { GolemSerif } from '../../../const/GolemSelif';
import { FC } from 'react';

type Props = {
  characterSerif: number;
  ememySerifNum: number;
};

export const SerifBox0103: FC<Props> = ({ characterSerif, ememySerifNum }) => {
  const CharaSerif: string[] = [
    'でけえ！',
    'じゃんけん！',
    'グー！',
    'チョキ！',
    'パー！',
    'あいこで',
    'よっしゃ！！',
    'いって！',
    '勝った！！',
    '負けた……',
  ];

  return (
    <Box sx={{ height: '30%' }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
        sx={{ width: '100%', height: '100%' }}
      >
        <Grid item xs={6} sx={{ width: '100%', height: '100%' }}>
          <Box sx={{ padding: '3%', width: '100%', height: '90%', position: 'relative' }}>
            <Box
              sx={{
                padding: '5%',
                width: '90%',
                height: '90%',
                backgroundColor: '#ff9158',
                borderRadius: '30px',
                color: '#fff',
                ':active': {
                  backgroundColor: '#ff9158',
                },
                ':hover': {
                  backgroundColor: '#ff9158',
                },
              }}
            >
              <Typography sx={{ fontSize: '1.5rem', paddingTop: '5%' }}>
                {CharaSerif[characterSerif]}
              </Typography>
            </Box>
            <Box
              sx={{
                width: '5%',
                height: '100%',
                border: '10px solid transparent',
                borderTop: '10px solid #ff9158',
                position: 'absolute',
                left: '10%',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ width: '100%', height: '100%' }}>
          <Box sx={{ padding: '3%', width: '100%', height: '90%', position: 'relative' }}>
            <Box
              sx={{
                padding: '5%',
                width: '90%',
                height: '90%',
                backgroundColor: '#ff9158',
                borderRadius: '30px',
                color: '#fff',
                ':active': {
                  backgroundColor: '#ff9158',
                },
                ':hover': {
                  backgroundColor: '#ff9158',
                },
              }}
            >
              <Typography sx={{ fontSize: '1.5rem', paddingTop: '5%' }}>
                {GolemSerif[ememySerifNum]}
              </Typography>
            </Box>
            <Box
              sx={{
                width: '5%',
                height: '100%',
                border: '10px solid transparent',
                borderTop: '10px solid #ff9158',
                position: 'absolute',
                right: '20%',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
