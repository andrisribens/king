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
  }

  return (
    <div>
      <Dialog
        open={true}
        onClose={props.onChange}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Sure about restarting the Tournament?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By clicking "Restart" all data will be erased.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleRestart} autoFocus>
            Restart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RestartDialog;
