import { Box, IconButton, Modal, Typography, Button, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const DungeonAppber = () => {
  const [backMainOpen, setBackMainOpen] = useState(false);
  const handleBackMainOpen = () => setBackMainOpen(true);
  const handleModalClose = () => setBackMainOpen(false);
  const navigate = useNavigate();
  return (
    <>
      <IconButton
        aria-label="ArrowBack"
        size="large"
        sx={{ height: '8%' }}
        onClick={handleBackMainOpen}
      >
        <HomeIcon />
      </IconButton>
      <div>
        <Modal
          open={backMainOpen}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '5%',
              left: '8%',

              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" component="h2">
              ダンジョン選択画面へ戻る？
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              wrap="wrap"
            >
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ marginLeft: '20%', marginRight: 'auto' }}
                  onClick={() => {
                    navigate('/MainMenu');
                  }}
                >
                  はい
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginLeft: '20%', marginRight: 'auto' }}
                  onClick={handleModalClose}
                >
                  いいえ
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    </>
  );
};
