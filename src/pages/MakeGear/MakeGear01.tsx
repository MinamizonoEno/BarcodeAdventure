import { PageLayout } from '../../styles/PageLayout';
import { CodereaderBar } from '../../conponents/Codereader/CodereaderBar';
import { Box, Grid, Container } from '@mui/material';
import { Scannum } from '../../conponents/Codereader/Scannumber';
import { Inputnum } from '../../conponents/Codereader/Inputnumber';
import { Nameming } from '../../conponents/Codereader/Nameming';

export const MakeGear01 = () => {
  return (
    <PageLayout>
      <Box sx={{ width: '100%', height: '100%', backgroundColor: '#E8D7D7' }}>
        <CodereaderBar />
        <Grid container sx={{ width: '100%', height: '20%', spacing: '0' }} />
        <Container sx={{ width: '100%', height: '4%' }} />
        <Scannum />

        <Box sx={{ width: '100%', height: '30%', backgroundColor: '#A8795F' }}>
          <Inputnum />
          <Nameming />
        </Box>
      </Box>
    </PageLayout>
  );
};
