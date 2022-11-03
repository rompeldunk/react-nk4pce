import SettingsIcon from '@mui/icons-material/Settings';
import { DataGridPro } from '@mui/x-data-grid-pro';

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import { amsRows, browseColumns } from './dummyDataGridData';

export default function SettingsDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [rows, setRows] = useState(amsRows);

  const handleCellEditCommit = (cell) => {
    const changedRows = rows.map((row) =>
      row.id === cell.id ? { ...row, [cell.field]: cell.value } : row
    );

    setRows(changedRows);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} color="secondary" size="small">
        <SettingsIcon />
      </Button>

      <Dialog onClose={handleClose} open={open} fullWidth maxWidth="lg">
        <DialogTitle>Operator Log Settings</DialogTitle>
        <DialogContent>
          <Box sx={{ height: 350, width: '100%' }}>
            <DataGridPro
              rows={rows}
              columns={browseColumns}
              disableSelectionOnClick
              onCellEditCommit={handleCellEditCommit}
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={3}
            >
              <Button color="primary" variant="outlined" onClick={onSubmit}>
                Save changes
              </Button>
              <Button
                onClick={handleClose}
                color="secondary"
                variant="outlined"
              >
                Close
              </Button>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
