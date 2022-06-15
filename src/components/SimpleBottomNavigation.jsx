import * as React from "react";
// import { Routes, Route, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import ScheduleIcon from "@mui/icons-material/Schedule";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Paper from "@mui/material/Paper";

function SimpleBottomNavigation(props) {
  const [value, setValue] = React.useState(0);

  const scrollToSchedule = () => {
    const section = document.querySelector("#schedule");
    section.scrollIntoView({ block: "start" });
  };

  const scrollToScores = () => {
    const section = document.querySelector("#scores");
    section.scrollIntoView({ block: "start" });
  };

  const scrollToWinners = () => {
    const section = document.querySelector("#winners-table");
    section.scrollIntoView({ block: "start" });
  };

  function restartTournament() {
  props.onRestart();
  };

  return (
    <Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
        className="bottom-navigation"
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Schedule"
            icon={<ScheduleIcon />}
            onClick={scrollToSchedule}
          />
          <BottomNavigationAction
            label="Game Scores"
            icon={<ScoreboardIcon />}
            onClick={scrollToScores}
          />
          <BottomNavigationAction
            label="Winners Table"
            icon={<EmojiEventsOutlinedIcon />}
            onClick={scrollToWinners}
          />
          <BottomNavigationAction
            label="Restart Tournament"
            icon={<RestartAltIcon />}
            onClick={restartTournament}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default SimpleBottomNavigation;
