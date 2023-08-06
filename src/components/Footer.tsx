import * as React from 'react';
import { Box } from '@mui/system';

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <Box component="footer" p={2}>
      Footer
    </Box>
  );
}
