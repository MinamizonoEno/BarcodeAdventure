import Inputnum from '../conponents/inputnum';
import Scanapp from '../conponents/scanapp';
import { PageLayout } from '../styles/PageLayout';

export const TitlePage = () => {
  return (
    <PageLayout>
      <Inputnum />
      <Scanapp />
    </PageLayout>
  );
};
