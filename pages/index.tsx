import type { ReactElement } from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from '../src/components/container/PageContainer';

// components
import FullLayout from '../src/layouts/full/FullLayout';
import Message from '../src/components/dashboard/Message';
import MyInfo from '../src/components/dashboard/MyInfo';

export default function Home() {
  return (
    <PageContainer title="Chat Now!">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Message />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                  <MyInfo />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};