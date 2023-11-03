import { Box, Button, Grid } from '@mui/material';
import { FC } from 'react';

type Props = {
  setSelectAdventure: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MainManuButton: FC<Props> = ({ setSelectAdventure }) => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Grid item xs={6}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#C69A67',
              color: '#ffffff',
              width: '95%',
              height: '90%',
              fontSize: '2rem',
            }}
          >
            装備
          </Button>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              setSelectAdventure(true);
            }}
            sx={{
              backgroundColor: '#C69A67',
              color: '#ffffff',
              width: '95%',
              height: '90%',
              fontSize: '2rem',
            }}
          >
            冒険
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
