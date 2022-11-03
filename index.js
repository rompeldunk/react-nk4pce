import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import SettingsDialog from './SettingsDialog';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <SettingsDialog />
    </StyledEngineProvider>
  </React.StrictMode>
);
