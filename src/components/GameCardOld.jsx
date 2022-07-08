import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function GameCard(props) {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [isScoreInputDone, setIsScoreInputDone] = useState(false);

  const [inputScore, setInputScore] = useState({
    gameNo: props.gameNo,
    id: props.id,
    team1FirstPlayer: props.team1FirstPlayer,
    team1SecondPlayer: props.team1SecondPlayer,
    team1Score: "",
    team2FirstPlayer: props.team2FirstPlayer,
    team2SecondPlayer: props.team2SecondPlayer,
    team2Score: "",
    action: "add"
  });

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
  }

  function editScore() {
    props.onDelete(props.id, inputScore);
    handleIsButtonPressed();
  }

  return (
    <div className={isButtonPressed ? "game isbuttonpressed" : "game"}>
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <span>
          <h1>{props.gameNo}</h1>
        </span>
        <span>
          <h4>{props.team1FirstPlayer + " + " + props.team1SecondPlayer}</h4>
        </span>
        <span>
          <h4>vs</h4>
        </span>
        <span>
          <h4>{props.team2FirstPlayer + " + " + props.team2SecondPlayer}</h4>
        </span>
      </Stack>
      <Stack
        marginTop={2}
        marginBottom={2}
        alignItems="bottom"
        justifyContent="space-between"
        direction="row"
        spacing={15}
      >
        <TextField
          disabled={isButtonPressed}
          id="filled-number"
          type="number"
          label="Team 1 score"
          autoFocus={props.gameNo === 1}
          InputLabelProps={{
            shrink: true
          }}
          variant="filled"
          onChange={handleScoreChange}
          value={inputScore.team1Score}
          name="team1Score"
          teamPlayer1={props.team1FirstPlayer}
          teamPlayer2={props.team1SecondPlayer}
          gameNo={props.gameNo}
        />
        <TextField
          disabled={isButtonPressed}
          id="filled-number"
          type="number"
          label="Team 2 score"
          InputLabelProps={{
            shrink: true
          }}
          variant="filled"
          onChange={handleScoreChangeWithButtonActivation}
          value={inputScore.team2Score}
          name="team2Score"
          teamPlayer1={props.team2FirstPlayer}
          teamPlayer2={props.team2SecondPlayer}
          gameNo={props.gameNo}
        />
      </Stack>
      <Stack>
        <Button
          disabled={!isScoreInputDone}
          variant={!isButtonPressed ? "contained" : "outlined"}
          size="large"
          onClick={!isButtonPressed ? submitScore : editScore}
          type="submit"
        >
          {isButtonPressed ? "Edit Score" : "Submit Score"}
        </Button>
      </Stack>
    </div>
  );
}

export default GameCardOld;
