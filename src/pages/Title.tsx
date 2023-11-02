import { PageLayout } from '../styles/PageLayout';
import { Box, Button } from '@mui/material';
import titleLogo from '../assets/titleLogo.jpg';
import { useNavigate } from 'react-router';

export const Title = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <Box sx={{ backgroundColor: '#966e82', width: '100%', height: '100%', padding: '0px' }}>
        <Box sx={{ width: '100%', height: '15%' }} />
        <Box
          sx={{
            width: '100%',
            height: '25%',
            backgroundColor: '#aaa',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/*画像ができ次第変更*/}
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
            variant="contained"
            sx={{ width: '80%', height: '60%' }}
            onClick={() => {
              navigate('/MainMenu');
            }}
          >
            スタート
          </Button>
        </Box>
        <Box sx={{ width: '100%', height: '20%' }} />
      </Box>
    </PageLayout>
  );
};
