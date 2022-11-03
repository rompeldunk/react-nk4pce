import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';
import Demo from './demo';

export function BandSettingsDialog({ open, onClose, options, onSave }) {
  const [newOptions, setNewOptions] = useState(options);

  const handleClose = () => {
    onClose();
  };

  const handleSave = (event) => {
    onSave(event, newOptions);
    handleClose();
  };

  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle onClose={handleClose}>Band Plot</DialogTitle>
        <DialogContent dividers sx={{ minWidth: 550 }}>
          <Demo />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>Save changes</Button>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
