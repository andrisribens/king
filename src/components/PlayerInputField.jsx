import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function PlayerInputField(props) {
  return (
    <Grid item xs={12} md={6}>
      <TextField
        id="outlined-helperText"
        margin="normal"
        fullWidth
        name={props.name}
        onChange={props.onChange}
        label={props.label}
        key={props.id}
        sx={{
          '.MuiOutlinedInput-root.Mui-focused': {
            backgroundColor: '#f2f2f2',
          },
        }}
      />
    </Grid>
  );
}

export default PlayerInputField;
