import { PageLayout } from '../../styles/PageLayout';
import { CodereaderBar } from '../../conponents/Codereader/CodereaderBar';
import { Box } from '@mui/material';
import { Scannum } from '../../conponents/Codereader/Scannumber';
import { Inputnum } from '../../conponents/Codereader/Inputnumber';
import { Nameming } from '../../conponents/Codereader/Nameming';
import { WeaponTypeContext } from '../../provider/ContextProviders';
import { useContext } from 'react';

export const MakeGear01 = () => {
  const [WeaponType] = useContext(WeaponTypeContext);

  return (
    <PageLayout>
      <Box sx={{ width: '100%', height: '100%', backgroundColor: '#E8D7D7' }}>
        <CodereaderBar />
        <Box sx={{ width: '100%', height: '47%', backgroundColor: '#E8D7D7' }}>
          <Scannum />
        </Box>
        <Box
          sx={{ width: '100%', height: '45%', backgroundColor: '#A8795F', position: 'relative' }}
        >
          <Inputnum />
          <img
            src={WeaponType}
            alt="武器画像"
            style={{ position: 'absolute', height: '65%', left: '40%', top: '35%' }}
          />
          <Nameming />
        </Box>
      </Box>
    </PageLayout>
  );
};
