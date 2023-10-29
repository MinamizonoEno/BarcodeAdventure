import { useNavigate } from 'react-router';
import { PageLayout } from '../styles/PageLayout';
import { Box, Container, IconButton, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const MainMenu = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <Box sx={{ width: '100%', height: '100%', backgroundColor: '#E8D7D7' }}>
        <Container sx={{ width: '100%', height: '8%', backgroundColor: '#CA9A8B' }}>
          <IconButton
            aria-label="ArrowBack"
            size="large"
            onClick={() => {
              navigate('/');
            }}
            sx={{ height: '100%' }}
          >
            <ArrowBackIcon fontSize="inherit" />
          </IconButton>
        </Container>
        <Box sx={{ width: '100%', height: '7%' }} />
        <Grid container sx={{ width: '100%', height: '28%', spacing: '0' }}>
          <Grid item xs={6}>
            chara
          </Grid>
          <Grid item xs={6}>
            buki
          </Grid>
        </Grid>
        <Container sx={{ width: '100%', height: '12%' }} />
        <Box sx={{ width: '100%', height: '45%', backgroundColor: '#A8795F' }}>
          <Grid container spacing={0} sx={{ width: '100%', height: '100%' }}>
            <Grid item xs={6}>
              <Box>aaa</Box>
            </Grid>
            <Grid item xs={6}>
              <Box>aaa</Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </PageLayout>
  );
};
