import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function RestartDialog(props) {
  const handleCancel = () => {
    props.onChange();
  };

  const handleRestart = () => {
    window.localStorage.clear();
    window.location.reload(false);
  };

  return (
    <div>
      <Dialog
        open={true}
        onClose={props.onChange}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Sure about restarting?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By clicking "Restart" all data will be removed. And you can start a
            new tournament.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCancel}
            variant="outlined"
            color="inherit"
            autoFocus
            sx={{
              borderColor: 'rgba(0, 0, 0, 0.23)',
              color: 'text.secondary',
              '&:hover': {
                borderColor: 'rgba(0, 0, 0, 0.4)',
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleRestart} variant="contained" color="error">
            Restart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RestartDialog;
