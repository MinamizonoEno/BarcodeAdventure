import { Box, Button, Container, Typography } from '@mui/material';

export const AttackAction = () => {
  return (
    <>
      <Container
        sx={{
          height: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          wrap: 'wrap',
          whiteSpace: 'nowrap',
        }}
      >
        <Box
          sx={{
            height: '100%',
            paddingTop: '3%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Button
            variant="contained"
            sx={{
              height: '30%',
              width: '100%',
              backgroundColor: '#fff',
              marginTop: '3%',
              color: '#000',
              ':active': {
                backgroundColor: '#aaa',
              },
              ':hover': {
                backgroundColor: '#fff',
              },
            }}
          >
            <Typography sx={{ fontSize: '2rem' }}>グー</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              height: '30%',
              width: '100%',
              backgroundColor: '#fff',
              marginTop: '3%',
              color: '#000',
              ':active': {
                backgroundColor: '#aaa',
              },
              ':hover': {
                backgroundColor: '#fff',
              },
            }}
          >
            <Typography sx={{ fontSize: '2rem' }}>チョキ</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              height: '30%',
              width: '100%',
              backgroundColor: '#fff',
              marginTop: '3%',
              color: '#000',
              ':active': {
                backgroundColor: '#aaa',
              },
              ':hover': {
                backgroundColor: '#fff',
              },
            }}
          >
            <Typography sx={{ fontSize: '2rem' }}>パー</Typography>
          </Button>
        </Box>
      </Container>
    </>
  );
};
