import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function SnackbarAlert() {
return (
<Snackbar
        open={playerAlertOpen}
        anchorOrigin={{vertical:"center", horizontal:"center"}}
        onClose={() => {setPlayerAlertOpen(false)}}
      >
      <Alert 
        variant="filled"
        severity="warning"
        onClose={() => {setPlayerAlertOpen(false)}}
      >Please enter the names of players!
      </Alert>
      </Snackbar>
)}

export default SnackbarAlert;
