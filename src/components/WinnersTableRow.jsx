import React from 'react';
import Grid from '@mui/material/Grid';

function WinnersTableRow(props) {
  return (
    <div
      className={
        props.rowNo === 1
          ? 'first-row result'
          : props.rowNo === 2
          ? 'second-row result'
          : props.rowNo === 3
          ? 'third-row result'
          : 'result'
      }
    >
      <Grid container>
        <Grid
          item
          xs={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
          pr={1}
        >
          <h3>{props.rowNo}</h3>
        </Grid>

        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
          }}
          pl={1}
          pr={1}
        >
          <div>
            <p>{props.player}</p>
          </div>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
          }}
        >
          <span>
            <p>{props.playerTotalWins}</p>
          </span>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
          }}
        >
          <span>
            {props.playerTotalPoints > 0 ? (
              <p className="positive-points">+{props.playerTotalPoints}</p>
            ) : props.playerTotalPoints < 0 ? (
              <p className="negative-points">{props.playerTotalPoints}</p>
            ) : (
              0
            )}
          </span>
        </Grid>
      </Grid>
    </div>
  );
}

export default WinnersTableRow;
