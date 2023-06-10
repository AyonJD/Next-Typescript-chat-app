import type { ReactElement } from 'react';
import PageContainer from '../../src/components/container/PageContainer';
import Card from '../../src/components/shared/CardShape';
import FullLayout from '../../src/layouts/full/FullLayout';

const Icons = () => {
  return (
    <PageContainer title="Icons" description="this is Icons">

      <Card title="Icons">
      <iframe src="https://tabler-icons.io/"  title="Inline Frame Example" frameBorder={0}
    width="100%"
    height="650"></iframe>
      </Card>
    </PageContainer>
  );
};

export default Icons;
Icons.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};