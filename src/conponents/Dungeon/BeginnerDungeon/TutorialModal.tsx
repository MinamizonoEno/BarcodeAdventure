import { Box, Button, Modal, Typography } from '@mui/material';
import { FC } from 'react';
import titleStartButton from '../../../assets/image/logo/titleStartButton.png';

type Props = {
  openTutorialModal: boolean;
  setOpenTutorialModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '80%',
  width: '90%',
  bgcolor: '#C6ABAB',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const TutorialModal: FC<Props> = ({ openTutorialModal, setOpenTutorialModal }) => {
  const handleClose = () => setOpenTutorialModal(false);

  return (
    <div>
      <Modal
        open={openTutorialModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ fontSize: '2rem', textAlign: 'center', color: '#fff' }}>
            あそびかた
          </Typography>
          <Typography
            sx={{ fontSize: '1.4rem', textAlign: 'center', color: '#000', marginTop: '2%' }}
          >
            右下のジャンケンボタンを押して攻撃の種類を選んでね！
          </Typography>
          <Typography
            sx={{ fontSize: '1.4rem', textAlign: 'center', color: '#000', marginTop: '2%' }}
          >
            勝つとその攻撃のステータス分のダメージを与えるよ！
          </Typography>
          <Typography
            sx={{ fontSize: '1.4rem', textAlign: 'center', color: '#000', marginTop: '2%' }}
          >
            ステータスは左下に表示されていて武器の攻撃力で変動するよ！{' '}
          </Typography>
          <Typography
            sx={{ fontSize: '1.4rem', textAlign: 'center', color: '#000', marginTop: '2%' }}
          >
            強敵に勝てないときはメインメニューの装備から装備を整えよう！{' '}
          </Typography>
          <Button
            onClick={() => {
              setOpenTutorialModal(false);
            }}
            variant="text"
            sx={{
              padding: '5%',
              width: '100%',
              height: 'auto',
              backgroundImage: `url(${titleStartButton})`,
              backgroundSize: 'cover',
              color: 'white',
            }}
          >
            <Typography sx={{ fontSize: '1.3rem' }}>OK</Typography>
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
