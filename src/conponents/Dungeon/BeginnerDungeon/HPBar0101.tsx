import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  characterHP: number;
  slimeHP: number;
};

export const HPBar0101: FC<Props> = ({ characterHP, slimeHP }) => {
  return (
    <Box sx={{ height: '15%' }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
        sx={{ height: '100%', width: '100%' }}
      >
        <Grid item xs={6} sx={{ height: '100%', width: '100%' }}>
          <Typography sx={{ fontSize: '1rem', color: '#000' }}>コードちゃん</Typography>
          <Box sx={{ height: '90%', width: '100%', padding: '5%' }}>
            <Box
              sx={{
                height: '50%',
                width: '90%',
                backgroundColor: '#ff0000',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  width: `${(characterHP / 150) * 100}%`,
                  backgroundColor: '#33FF00',
                  position: 'absolute',
                  left: '0',
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ height: '100%', width: '100%' }}>
          <Typography
            sx={{ fontSize: '1rem', color: '#000', textAlign: 'right', paddingRight: '10%' }}
          >
            すらいむ
          </Typography>

          <Box sx={{ height: '90%', width: '100%', padding: '5%' }}>
            <Box
              sx={{
                height: '50%',
                width: '90%',
                backgroundColor: '#ff0000',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  width: `${slimeHP}%`,
                  backgroundColor: '#33FF00',
                  position: 'absolute',
                  right: '0',
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
