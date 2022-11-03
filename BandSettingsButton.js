import { Settings } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { BandSettingsDialog } from './BandSettingsDialog';

export function BandSettingsButton({ options, onSave }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSettingsClose = () => {
    setIsSettingsOpen(false);
  };

  return (
    <div>
      <IconButton size="small" onClick={() => setIsSettingsOpen(true)}>
        <Settings fontSize="inherit" />
      </IconButton>
      {isSettingsOpen && (
        <BandSettingsDialog
          open={isSettingsOpen}
          options={options}
          onClose={handleSettingsClose}
          onSave={onSave}
        />
      )}
    </div>
  );
}
