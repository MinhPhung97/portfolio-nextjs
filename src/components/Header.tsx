import * as React from 'react';
import { Box } from '@mui/system';

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <Box component="header" p={2}>
      Header
    </Box>
  );
}
