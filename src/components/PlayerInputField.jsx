import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function PlayerInputField(props) {
  return (
    <Grid item xs={12} md={6}>
      <TextField
        id={`player-input-${props.name}`}
        margin="normal"
        fullWidth
        name={props.name}
        value={props.value ?? ''}
        onChange={props.onChange}
        label={props.label}
        sx={{
          '.MuiOutlinedInput-root.Mui-focused': {
            backgroundColor: '#f9d571',
          },
          '& label.Mui-focused': {
            color: '#5c3d00',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#c4920a',
          },
        }}
      />
    </Grid>
  );
}

export default PlayerInputField;
