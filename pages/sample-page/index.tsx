import type { ReactElement } from 'react';
import { Typography } from '@mui/material';
import PageContainer from '../../src/components/container/PageContainer';
import Card from '../../src/components/shared/CardShape';
import FullLayout from '../../src/layouts/full/FullLayout';

const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <Card title="Sample Page">
        <Typography>This is a sample page</Typography>
      </Card>
    </PageContainer>
  );
};

export default SamplePage;
SamplePage.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};