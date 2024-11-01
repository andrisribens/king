import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import ScheduleIcon from "@mui/icons-material/Schedule";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Paper from "@mui/material/Paper";

function SimpleBottomNavigation(props) {
  const [value, setValue] = useState(0);

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

  function openRestartDialog() {
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
            label="Games"
            icon={<ScheduleIcon />}
            onClick={scrollToSchedule}
          />
          <BottomNavigationAction
            label="Scores"
            icon={<ScoreboardIcon />}
            onClick={scrollToScores}
            disabled={!props.gameResultsAreSubmitted}

          />
          <BottomNavigationAction
            label="Winners"
            icon={<EmojiEventsOutlinedIcon />}
            onClick={scrollToWinners}
            disabled={!props.gameResultsAreSubmitted}
          />
          <BottomNavigationAction
            label="Restart"
            icon={<RestartAltIcon />}
            onClick={openRestartDialog}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default SimpleBottomNavigation;
