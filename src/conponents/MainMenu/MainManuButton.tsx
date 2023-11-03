import { Box, Button, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import sordIcon from '../../assets/image/logo/sordIcon.png';
import equipIcon from '../../assets/image/logo/equipIcon.png';

type Props = {
  setSelectAdventure: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MainManuButton: FC<Props> = ({ setSelectAdventure }) => {
  const IconStyle: React.CSSProperties = {
    width: '80%',
    height: 'auto',
    position: 'absolute',
    top: '10%',
    left: '10%',
  };
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
              position: 'relative',
            }}
          >
            <img src={`${equipIcon}`} style={IconStyle} />
            <Typography sx={{ fontSize: '2rem', position: 'absolute', bottom: '15%' }}>
              装備
            </Typography>
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
              position: 'relative',
            }}
          >
            <img src={`${sordIcon}`} style={IconStyle} />
            <Typography sx={{ fontSize: '2rem', position: 'absolute', bottom: '15%' }}>
              冒険
            </Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
