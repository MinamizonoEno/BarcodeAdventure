import Inputnum from '../conponents/inputnum';
import Scancode from '../conponents/scancode';
import { PageLayout } from '../styles/PageLayout';

export const TitlePage = () => {
  return (
    <PageLayout>
      <Inputnum />
      <Scancode />
    </PageLayout>
  );
};
