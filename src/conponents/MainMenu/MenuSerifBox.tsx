import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

export const MenuSerifBox = () => {
  const Serif: string[] = [
    'こんにちは！',
    '左下のボタンから装備を整えられるよ！',
    '右下のボタンから冒険に出かけられるよ！',
    'タイトルに戻りたい時は左上を押してね！',
    '私はコードって名前だよ！',
    '右にあるのは今装備してる武器だよ！',
    'バーコードがあれば武器を召喚できるよ！',
    '戦闘時はジャンケンで勝った方が攻撃できるよ！',
    'ちなみに私たちがよく見るバーコードはJANコードって名前だよ！',
    'きゅーあーるこーど........？',
  ];
  const [serifNum, setSerifNum] = useState(0);
  const SerifClick = () => {
    setSerifNum(Math.floor(Math.random() * 10));
  };
  return (
    <Box sx={{ padding: '3%', width: '100%', height: '15%', position: 'relative' }}>
      <Button
        sx={{
          padding: '5%',
          width: '90%',
          height: '90%',
          backgroundColor: '#ff9158',
          borderRadius: '30px',
          color: '#fff',
          ':active': {
            backgroundColor: '#ff9158',
          },
          ':hover': {
            backgroundColor: '#ff9158',
          },
        }}
        onClick={SerifClick}
      >
        <Typography sx={{ fontSize: '1.5rem' }}>{Serif[serifNum]}</Typography>
      </Button>
      <Typography sx={{ position: 'absolute', right: '15%', bottom: '18%' }}>CLICK▼</Typography>
      <Box
        sx={{
          width: '5%',
          height: '100%',
          border: '10px solid transparent',
          borderTop: '10px solid #ff9158',
          position: 'absolute',
          left: '10%',
        }}
      />
    </Box>
  );
};
