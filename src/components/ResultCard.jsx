import React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

function ResultCard(props) {
  return (
    <div className="result">
      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <span>
          <h3>{props.gameNo}</h3>
        </span>
        <span>
          <p>{props.team1FirstPlayer + " + " + props.team1SecondPlayer}</p>
        </span>
        <span>
          <p>{props.team1Score}</p>
        </span>
        <span>
          <p>{props.team2FirstPlayer + " + " + props.team2SecondPlayer}</p>
        </span>
        <span>
          <p>{props.team2Score}</p>
        </span>
      </Stack>
    </div>
  );
}

export default ResultCard;
