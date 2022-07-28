import React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

function WinnersTableRow(props) {
  return (
    <div
      className={
        props.rowNo === 1
          ? "first-row result"
          : props.rowNo === 2
          ? "second-row result"
          : props.rowNo === 3
          ? "third-row result"
          : "result"
      }
    >
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <span>
          {props.rowNo === 1 ? (
            <h3>
              {props.rowNo}
              <EmojiEventsOutlinedIcon fontSize="small" color="action" />
            </h3>
          ) : (
            <h3>{props.rowNo}</h3>
          )}
        </span>
        <div>
          <p>{props.player}</p>
        </div>
        <span>
          <p>{props.playerTotalWins}</p>
        </span>
        <span>
          {props.playerTotalPoints > 0 ? (
            <p className="positive-points">+{props.playerTotalPoints}</p>
          ) : props.playerTotalPoints < 0 ? (
            <p className="negative-points">{props.playerTotalPoints}</p>
          ) : (
            0
          )}
        </span>
      </Stack>
    </div>
  );
}

export default WinnersTableRow;
