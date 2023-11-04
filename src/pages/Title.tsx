import { PageLayout } from '../styles/PageLayout';
import { Box, Button, Typography } from '@mui/material';
import titleLogo from '../assets/image/logo/titleLogo.png';
import dungeonBgImg from '../assets/image/backgroundimg/dungeonBgImg.png';
import titleStartButton from '../assets/image/logo/titleStartButton.png';
import { useNavigate } from 'react-router';

export const Title = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <Box
        sx={{
          backgroundImage: `url(${dungeonBgImg})`,
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
          padding: '0px',
        }}
      >
        <Box sx={{ width: '100%', height: '15%' }} />
        <Box
          sx={{
            width: '100%',
            height: '25%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img src={`${titleLogo}`} alt="test image" width={'100%'} />
        </Box>
        <Box sx={{ width: '100%', height: '20%' }} />
        <Box
          sx={{
            width: '100%',
            height: '20%',
            padding: '10%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="text"
            sx={{
              width: '80%',
              height: '60%',
              backgroundImage: `url(${titleStartButton})`,
              backgroundSize: 'cover',
              color: 'white',
            }}
            onClick={() => {
              navigate('/MainMenu');
            }}
          >
            <Typography sx={{ color: 'fff', fontSize: '1.5rem' }}>スタート</Typography>
          </Button>
        </Box>
        <Box sx={{ width: '100%', height: '20%' }} />
      </Box>
    </PageLayout>
  );
};
