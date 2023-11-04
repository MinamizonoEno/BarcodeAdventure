import { PageLayout } from '../../styles/PageLayout';
import { CodereaderBar } from '../../conponents/Codereader/CodereaderBar';
import { Box, Grid, Container } from '@mui/material';
import { Scannum } from '../../conponents/Codereader/Scannumber';
import { Inputnum } from '../../conponents/Codereader/Inputnumber';
import { Nameming } from '../../conponents/Codereader/Nameming';

export const MakeGear01 = () => {
  return (
    <PageLayout>
      <Box sx={{ width: '100%', height: '92%', backgroundColor: '#E8D7D7' }}>
        <CodereaderBar />
        <Grid container sx={{ width: '100%', height: '20%', spacing: '0' }}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
        </Grid>
        <Container sx={{ width: '100%', height: '4%' }} />
        <Scannum />
        <Inputnum />
        <Box sx={{ width: '100%', height: '45%', backgroundColor: '#A8795F' }}>
          <Nameming />
        </Box>
      </Box>
    </PageLayout>
  );
};
