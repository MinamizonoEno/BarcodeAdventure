import { Modal, Box, Typography, Button } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import cordchan_win from '../../../assets/image/cordchan/cordchan_win.png';
import titleStartButton from '../../../assets/image/logo/titleStartButton.png';

type Props = {
  openWinModal: boolean;
};

export const WinModal0101: FC<Props> = ({ openWinModal }) => {
  const navigate = useNavigate();

  return (
    <Modal
      open={openWinModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '60%',
        width: '90%',
        bgcolor: '#C6ABAB',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        padding: '0',
      }}
    >
      <Box sx={{ height: '100%', width: '100%', bgcolor: '#C6ABAB', position: 'relative' }}>
        <Typography sx={{ fontSize: '2.5rem', textAlign: 'center', color: '#fff' }}>
          勝利
        </Typography>
        <Box
          sx={{
            height: '70%',
            width: '100%',
            bgcolor: '#E9C2C2',
            position: 'relative',
            borderRadius: '30px',
          }}
        >
          <img
            src={`${cordchan_win}`}
            style={{
              height: '100%',
              width: 'auto',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            left: '45%',
            top: '90%',
            transform: 'translate(-50%, -50%)',
            paddingTop: '10%',
          }}
        >
          <Button
            onClick={() => {
              navigate('/BeginnerDungeon02');
            }}
            variant="text"
            sx={{
              width: '120%',
              height: '60%',
              backgroundImage: `url(${titleStartButton})`,
              backgroundSize: 'cover',
              color: 'white',
            }}
          >
            <Typography sx={{ fontSize: '1.3rem' }}>次のステージへ</Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
