import { Container } from '@mui/material';
import { FC } from 'react';

type Props = {
  children: React.ReactNode;
};
export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <Container sx={{ maxWidth: '50vh', height: '100vh', padding: '0px' }}>{children}</Container>
  );
};
