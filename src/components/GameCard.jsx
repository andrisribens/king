import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function GameCard(props) {
  function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
    });

    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
  }

  const inputScoreStickyKey = 'inputScore' + props.gameNo;
  const isButtonPressedStickyKey = 'isButtonPressed' + props.gameNo;
  const isScoreInputDoneStickyKey = 'isScoreInputDone' + props.gameNo;

  const [isButtonPressed, setIsButtonPressed] = useStickyState(
    false,
    isButtonPressedStickyKey
  );
  const [isScoreInputDone, setIsScoreInputDone] = useStickyState(
    false,
    isScoreInputDoneStickyKey
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

  function handleScoreChange(event) {
    const { name, value } = event.target;
    setInputScore((prevScore) => {
      return { ...prevScore, [name]: value };
    });
  }

  function handleScoreChangeWithButtonActivation(event) {
    const { name, value } = event.target;
    setInputScore((prevScore) => {
      return { ...prevScore, [name]: value };
    });
    setIsScoreInputDone(true);
  }

  function handleIsButtonPressed() {
    setIsButtonPressed(!isButtonPressed);
  }

  function submitScore() {
    props.onAdd(inputScore);
    handleIsButtonPressed();
    // setInputScorePassive(true);
  }

  function editScore() {
    props.onDelete(props.id, inputScore);
    handleIsButtonPressed();
  }

  return (
    <div className={isButtonPressed ? 'game isbuttonpressed' : 'game'}>
      <Stack direction="column" spacing={2}>
        <Stack
          spacing={4}
          direction="row"
          alignItems="top"
          justifyContent="space-between"
        >
          <span>
            <h1>{props.gameNo}</h1>
          </span>
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="space-between"
            divider={<Divider orientation="horizontal" flexItem />}
          >
            <span>
              <h4>
                {props.team1FirstPlayer + ' + ' + props.team1SecondPlayer}
              </h4>
            </span>
            <span>
              <h4>
                {props.team2FirstPlayer + ' + ' + props.team2SecondPlayer}
              </h4>
            </span>
          </Stack>

          <Stack direction="column" spacing={2}>
            <TextField
              disabled={isButtonPressed}
              id="outlined-number"
              type="number"
              label="Team 1 score"
              autoFocus={props.gameNo === 1}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={handleScoreChange}
              value={inputScore.team1Score}
              name="team1Score"
              teamPlayer1={props.team1FirstPlayer}
              teamPlayer2={props.team1SecondPlayer}
              gameNo={props.gameNo}
              sx={{
                '.MuiOutlinedInput-root.Mui-focused': {
                  backgroundColor: '#f9d571',
                },
              }}
            />
            <TextField
              disabled={isButtonPressed}
              id="outlined-number"
              type="number"
              label="Team 2 score"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={handleScoreChangeWithButtonActivation}
              value={inputScore.team2Score}
              name="team2Score"
              teamPlayer1={props.team2FirstPlayer}
              teamPlayer2={props.team2SecondPlayer}
              gameNo={props.gameNo}
              sx={{
                '.MuiOutlinedInput-root.Mui-focused': {
                  backgroundColor: '#f9d571',
                },
              }}
            />
          </Stack>
        </Stack>
        <Stack>
          <Button
            disabled={!isScoreInputDone}
            variant={!isButtonPressed ? 'contained' : 'outlined'}
            size="large"
            onClick={!isButtonPressed ? submitScore : editScore}
            type="submit"
          >
            {isButtonPressed ? 'Edit Score' : 'Submit Score'}
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default GameCard;
