import { Modal, Box, Typography, Button } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import cordchan_Lose from '../../../assets/image/cordchan/cordchan_Lose.png';
import titleStartButton from '../../../assets/image/logo/titleStartButton.png';

type Props = {
  openLoseModal: boolean;
};

export const LoseModal: FC<Props> = ({ openLoseModal }) => {
  const navigate = useNavigate();

  return (
    <Modal
      open={openLoseModal}
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
          敗北
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
            src={`${cordchan_Lose}`}
            alt={'負けたコードちゃん'}
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
              navigate('/MainMenu');
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
            <Typography sx={{ fontSize: '1.3rem' }}>メインメニューへ</Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
