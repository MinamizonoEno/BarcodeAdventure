import { FC } from 'react';
import { ContextProviders } from './ContextProviders';

type Props = {
  children: React.ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return <ContextProviders>{children}</ContextProviders>;
};
