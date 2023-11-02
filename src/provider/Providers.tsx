import { FC } from 'react';
import { BR_ContextProviders } from './BR_ContextProviders';

type Props = {
  children: React.ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return <BR_ContextProviders>{children}</BR_ContextProviders>;
};
