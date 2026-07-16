import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import useStickyState from '../hooks/useStickyState';

function TeamNames({ first, second }) {
  return (
    <div className="team-names">
      <span className="team-name">{first}</span>
      <span className="team-name">{second}</span>
    </div>
  );
}

function GameCard(props) {
  const inputScoreStickyKey = 'inputScore' + props.gameNo;
  const isButtonPressedStickyKey = 'isButtonPressed' + props.gameNo;

  const [isButtonPressed, setIsButtonPressed] = useStickyState(
    false,
    isButtonPressedStickyKey
  );

  const [inputScore, setInputScore] = useStickyState(
    {
      gameNo: props.gameNo,
      id: props.id,
      team1FirstPlayer: props.team1FirstPlayer,
      team1SecondPlayer: props.team1SecondPlayer,
      team1Score: '',
      team2FirstPlayer: props.team2FirstPlayer,
      team2SecondPlayer: props.team2SecondPlayer,
      team2Score: '',
      action: 'add',
    },
    inputScoreStickyKey
  );

  const bothScoresEntered =
    /^\d+$/.test(String(inputScore.team1Score)) &&
    /^\d+$/.test(String(inputScore.team2Score));

  function handleScoreChange(event) {
    const { name, value } = event.target;
    setInputScore((prevScore) => {
      return { ...prevScore, [name]: value };
    });
  }

  function handleIsButtonPressed() {
    setIsButtonPressed(!isButtonPressed);
  }

  function submitScore() {
    props.onAdd(inputScore);
    handleIsButtonPressed();
  }

  function editScore() {
    props.onDelete(props.id, inputScore);
    handleIsButtonPressed();
  }

  const scoreFieldSx = {
    width: '100%',
    '.MuiOutlinedInput-root.Mui-focused': {
      backgroundColor: '#f9d571',
    },
    '& label.Mui-focused': {
      color: '#5c3d00',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#c4920a',
    },
  };

  return (
    <div className={isButtonPressed ? 'game isbuttonpressed' : 'game'}>
      <Stack direction="column" spacing={2}>
        <Stack direction="row" alignItems="flex-start" spacing={1.5}>
          <span className="game-number">
            <h2>{props.gameNo}</h2>
          </span>

          <Stack
            direction="column"
            spacing={2}
            className="game-matchup-rows"
            flex={1}
          >
            <Stack
              direction="row"
              alignItems="flex-start"
              spacing={1.5}
              className="game-team-row"
            >
              <TeamNames
                first={props.team1FirstPlayer}
                second={props.team1SecondPlayer}
              />
              <TextField
                disabled={isButtonPressed}
                id={`team1-score-${props.gameNo}`}
                type="text"
                label="Team 1 score"
                autoFocus={props.gameNo === 1}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                }}
                variant="outlined"
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    handleScoreChange(e);
                  }
                }}
                value={inputScore.team1Score}
                name="team1Score"
                sx={scoreFieldSx}
                className="game-score-field"
              />
            </Stack>

            <Stack
              direction="row"
              alignItems="flex-start"
              spacing={1.5}
              className="game-team-row"
            >
              <TeamNames
                first={props.team2FirstPlayer}
                second={props.team2SecondPlayer}
              />
              <TextField
                disabled={isButtonPressed}
                id={`team2-score-${props.gameNo}`}
                type="text"
                label="Team 2 score"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                }}
                variant="outlined"
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    handleScoreChange(e);
                  }
                }}
                value={inputScore.team2Score}
                name="team2Score"
                sx={scoreFieldSx}
                className="game-score-field"
              />
            </Stack>
          </Stack>
        </Stack>

        <Stack>
          <Button
            disabled={!bothScoresEntered}
            variant="contained"
            size="large"
            onClick={!isButtonPressed ? submitScore : editScore}
            type="submit"
            sx={{
              fontWeight: 600,
              ...(isButtonPressed
                ? {
                    color: '#5c3d00',
                    border: 'none',
                    backgroundColor: 'rgba(92, 61, 0, 0.08)',
                    boxShadow: 'none',
                    textDecoration: 'none',
                    '&:hover': {
                      border: 'none',
                      backgroundColor: 'rgba(92, 61, 0, 0.14)',
                      boxShadow: 'none',
                      textDecoration: 'none',
                    },
                  }
                : {
                    color: '#fff',
                    backgroundColor: '#3d2900',
                    '&:hover': {
                      backgroundColor: '#1a1a1a',
                    },
                    '&.Mui-disabled': {
                      color: 'rgba(61, 41, 0, 0.28)',
                      backgroundColor: 'rgba(255, 255, 255, 0.22)',
                      border: '1px solid rgba(61, 41, 0, 0.12)',
                      boxShadow: 'none',
                    },
                  }),
            }}
          >
            {isButtonPressed ? 'Edit Score' : 'Submit Score'}
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default GameCard;
