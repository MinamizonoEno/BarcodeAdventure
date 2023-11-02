import { Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export const MenuAppBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ width: '100%', height: '8%', backgroundColor: '#CA9A8B' }}>
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
      </Box>
    </>
  );
};
