import React from 'react';
import Grid from '@mui/material/Grid';

function TeamNames({ first, second }) {
  return (
    <div className="team-names">
      <span className="team-name">{first}</span>
      <span className="team-name">{second}</span>
    </div>
  );
}

function ResultCard(props) {
  return (
    <div className="result">
      <Grid container>
        <Grid
          item
          xs={1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          pr={1}
        >
          <h3>{props.gameNo}</h3>
        </Grid>

        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
          }}
          pl={1}
          pr={1}
        >
          <TeamNames
            first={props.team1FirstPlayer}
            second={props.team1SecondPlayer}
          />
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
          }}
          pl={1}
          pr={1}
        >
          <span>
            <p>{props.team1Score}</p>
          </span>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
          }}
          pl={1}
          pr={1}
        >
          <TeamNames
            first={props.team2FirstPlayer}
            second={props.team2SecondPlayer}
          />
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
          }}
          pl={1}
        >
          <p>{props.team2Score}</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ResultCard;
