import Typography from '@mui/material/Typography';

import Meta from '@/Commerce/components/Meta';
import { FullSizeCenteredFlexBox } from '@/Commerce/components/styled';

function Page3() {
  return (
    <>
      <Meta title="page 3" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Page 3</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Page3;
