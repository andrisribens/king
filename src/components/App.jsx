import React, { useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GameCard from "./GameCard";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PlayerInputField from "./PlayerInputField.jsx";
import ResultCard from "./ResultCard.jsx";
import WinnersTableRow from "./WinnersTableRow.jsx";
import Divider from "@mui/material/Divider";
import SimpleBottomNavigation from "./SimpleBottomNavigation.jsx";
import Switch from "@mui/material/Switch";
import { BottomNavigationAction } from "@mui/material";

function App() {
  const [playerCount, setPlayerCount] = useState("");
  const [playersAreSubmitted, setPlayersAreSubmitted] = useState(false);
  const [gameResultsAreSubmitted, setGameResultsAreSubmitted] = useState(false);
  const addNumbers = (a, b) => {
    return Number(a) + Number(b);
  };
  const subtractNumbers = (a, b) => {
    return Number(a) - Number(b);
  };

  const playerInputs = [
    { id: 1, name: "player1", value: "", label: "Add Player 1" },
    { id: 2, name: "player2", value: "", label: "Add Player 2" },
    { id: 3, name: "player3", value: "", label: "Add Player 3" },
    { id: 4, name: "player4", value: "", label: "Add Player 4" },
    { id: 5, name: "player5", value: "", label: "Add Player 5" },
    { id: 6, name: "player6", value: "", label: "Add Player 6" }
  ];

  const inputsToShow = playerInputs.filter(
    (playerInput, id) => id < playerCount
  );

  function handlePlayerCount(event) {
    setPlayerCount(
      event.target.value === "5" ? 5 : event.target.value === "6" ? 6 : 4
    );
    return inputsToShow;
  }

  function createPlayerInput(playerInfo) {
    return (
      <PlayerInputField
        key={playerInfo.id}
        name={playerInfo.name}
        label={playerInfo.label}
        onChange={handleChange}
      />
    );
  }

  const [players, setPlayers] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;

    setPlayers((prevPlayer) => {
      return {
        ...prevPlayer,
        [name]: value
      };
    });
  }

  function handleSubmitPlayers() {
    setPlayersAreSubmitted(true);
  }

  const player1 = players.player1;
  const player2 = players.player2;
  const player3 = players.player3;
  const player4 = players.player4;
  const player5 = players.player5;
  const player6 = players.player6;

  //Two rounds of four player schedule scheme
  const fourPlayerSchedule = [
    {
      gameNo: 1,
      team1FirstPlayer: player1,
      team1SecondPlayer: player4,
      team2FirstPlayer: player2,
      team2SecondPlayer: player3
    },
    {
      gameNo: 2,
      team1FirstPlayer: player1,
      team1SecondPlayer: player3,
      team2FirstPlayer: player2,
      team2SecondPlayer: player4
    },
    {
      gameNo: 3,
      team1FirstPlayer: player1,
      team1SecondPlayer: player2,
      team2FirstPlayer: player3,
      team2SecondPlayer: player4
    },
    {
      gameNo: 4,
      team1FirstPlayer: player1,
      team1SecondPlayer: player4,
      team2FirstPlayer: player2,
      team2SecondPlayer: player3
    },
    {
      gameNo: 5,
      team1FirstPlayer: player1,
      team1SecondPlayer: player3,
      team2FirstPlayer: player2,
      team2SecondPlayer: player4
    },
    {
      gameNo: 6,
      team1FirstPlayer: player1,
      team1SecondPlayer: player2,
      team2FirstPlayer: player3,
      team2SecondPlayer: player4
    }
  ];

  //Two rounds of five player schedule scheme
  const fivePlayerSchedule = [
    {
      gameNo: 1,
      team1FirstPlayer: player1,
      team1SecondPlayer: player4,
      team2FirstPlayer: player2,
      team2SecondPlayer: player3
    },
    {
      gameNo: 2,
      team1FirstPlayer: player3,
      team1SecondPlayer: player5,
      team2FirstPlayer: player1,
      team2SecondPlayer: player2
    },
    {
      gameNo: 3,
      team1FirstPlayer: player2,
      team1SecondPlayer: player4,
      team2FirstPlayer: player1,
      team2SecondPlayer: player5
    },
    {
      gameNo: 4,
      team1FirstPlayer: player1,
      team1SecondPlayer: player3,
      team2FirstPlayer: player4,
      team2SecondPlayer: player5
    },
    {
      gameNo: 5,
      team1FirstPlayer: player2,
      team1SecondPlayer: player5,
      team2FirstPlayer: player3,
      team2SecondPlayer: player4
    },
    {
      gameNo: 6,
      team1FirstPlayer: player1,
      team1SecondPlayer: player4,
      team2FirstPlayer: player2,
      team2SecondPlayer: player3
    },
    {
      gameNo: 7,
      team1FirstPlayer: player3,
      team1SecondPlayer: player5,
      team2FirstPlayer: player1,
      team2SecondPlayer: player2
    },
    {
      gameNo: 8,
      team1FirstPlayer: player2,
      team1SecondPlayer: player4,
      team2FirstPlayer: player1,
      team2SecondPlayer: player5
    },
    {
      gameNo: 9,
      team1FirstPlayer: player1,
      team1SecondPlayer: player3,
      team2FirstPlayer: player4,
      team2SecondPlayer: player5
    },
    {
      gameNo: 10,
      team1FirstPlayer: player2,
      team1SecondPlayer: player5,
      team2FirstPlayer: player3,
      team2SecondPlayer: player4
    }
  ];

  //One round of six player schedule scheme
  const sixPlayerSchedule = [
    {
      gameNo: 1,
      team1FirstPlayer: player3,
      team1SecondPlayer: player6,
      team2FirstPlayer: player1,
      team2SecondPlayer: player2
    },
    {
      gameNo: 2,
      team1FirstPlayer: player6,
      team1SecondPlayer: player2,
      team2FirstPlayer: player5,
      team2SecondPlayer: player3
    },
    {
      gameNo: 3,
      team1FirstPlayer: player4,
      team1SecondPlayer: player3,
      team2FirstPlayer: player2,
      team2SecondPlayer: player5
    },
    {
      gameNo: 4,
      team1FirstPlayer: player2,
      team1SecondPlayer: player4,
      team2FirstPlayer: player3,
      team2SecondPlayer: player1
    },
    {
      gameNo: 5,
      team1FirstPlayer: player1,
      team1SecondPlayer: player5,
      team2FirstPlayer: player6,
      team2SecondPlayer: player4
    },
    {
      gameNo: 6,
      team1FirstPlayer: player1,
      team1SecondPlayer: player2,
      team2FirstPlayer: player4,
      team2SecondPlayer: player5
    },
    {
      gameNo: 7,
      team1FirstPlayer: player5,
      team1SecondPlayer: player3,
      team2FirstPlayer: player1,
      team2SecondPlayer: player4
    },
    {
      gameNo: 8,
      team1FirstPlayer: player2,
      team1SecondPlayer: player5,
      team2FirstPlayer: player6,
      team2SecondPlayer: player1
    },
    {
      gameNo: 9,
      team1FirstPlayer: player3,
      team1SecondPlayer: player1,
      team2FirstPlayer: player5,
      team2SecondPlayer: player6
    },
    {
      gameNo: 10,
      team1FirstPlayer: player6,
      team1SecondPlayer: player4,
      team2FirstPlayer: player2,
      team2SecondPlayer: player3
    },
    {
      gameNo: 11,
      team1FirstPlayer: player3,
      team1SecondPlayer: player6,
      team2FirstPlayer: player4,
      team2SecondPlayer: player5
    },
    {
      gameNo: 12,
      team1FirstPlayer: player6,
      team1SecondPlayer: player2,
      team2FirstPlayer: player1,
      team2SecondPlayer: player4
    },
    {
      gameNo: 13,
      team1FirstPlayer: player4,
      team1SecondPlayer: player3,
      team2FirstPlayer: player6,
      team2SecondPlayer: player1
    },
    {
      gameNo: 14,
      team1FirstPlayer: player2,
      team1SecondPlayer: player4,
      team2FirstPlayer: player5,
      team2SecondPlayer: player6
    },
    {
      gameNo: 15,
      team1FirstPlayer: player1,
      team1SecondPlayer: player5,
      team2FirstPlayer: player2,
      team2SecondPlayer: player3
    }
  ];

  //Filter schedule for one round tournament
  const oneRoundFourPlayerSchedule = fourPlayerSchedule.filter((game) => {
    return game.gameNo <= 3;
  });
  const oneRoundFivePlayerSchedule = fivePlayerSchedule.filter((game) => {
    return game.gameNo <= 5;
  });

  //State and function to handle switch for second round
  const [addSecondRound, setAddSecondRound] = useState(false);
  const handleSecondRoundSwitch = (event) => {
    setAddSecondRound(event.target.checked);
  };

  const actualSchedule =
    playerCount === 4
      ? addSecondRound
        ? fourPlayerSchedule
        : oneRoundFourPlayerSchedule
      : playerCount === 5
      ? addSecondRound
        ? fivePlayerSchedule
        : oneRoundFivePlayerSchedule
      : sixPlayerSchedule;

  function createSchedule() {
    handleSubmitPlayers();
    return actualSchedule;
  }

  function createGame(gameInfo, index) {
    return (
      <Grid item xs={12} md={6}>
        <GameCard
          key={index}
          id={gameInfo.gameNo}
          gameNo={gameInfo.gameNo}
          team1FirstPlayer={gameInfo.team1FirstPlayer}
          team1SecondPlayer={gameInfo.team1SecondPlayer}
          team2FirstPlayer={gameInfo.team2FirstPlayer}
          team2SecondPlayer={gameInfo.team2SecondPlayer}
          onAdd={addGameScore}
          onDelete={deleteGameScore}
        />
      </Grid>
    );
  }

  const [player1TotalPoints, setPlayer1TotalPoints] = useState(0);
  const [player2TotalPoints, setPlayer2TotalPoints] = useState(0);
  const [player3TotalPoints, setPlayer3TotalPoints] = useState(0);
  const [player4TotalPoints, setPlayer4TotalPoints] = useState(0);
  const [player5TotalPoints, setPlayer5TotalPoints] = useState(0);
  const [player6TotalPoints, setPlayer6TotalPoints] = useState(0);

  const [player1TotalWins, setPlayer1TotalWins] = useState(0);
  const [player2TotalWins, setPlayer2TotalWins] = useState(0);
  const [player3TotalWins, setPlayer3TotalWins] = useState(0);
  const [player4TotalWins, setPlayer4TotalWins] = useState(0);
  const [player5TotalWins, setPlayer5TotalWins] = useState(0);
  const [player6TotalWins, setPlayer6TotalWins] = useState(0);

  const playerResults = [
    {
      playerNo: 1,
      player: player1,
      playerTotalPoints: player1TotalPoints,
      playerTotalWins: player1TotalWins
    },
    {
      playerNo: 2,
      player: player2,
      playerTotalPoints: player2TotalPoints,
      playerTotalWins: player2TotalWins
    },
    {
      playerNo: 3,
      player: player3,
      playerTotalPoints: player3TotalPoints,
      playerTotalWins: player3TotalWins
    },
    {
      playerNo: 4,
      player: player4,
      playerTotalPoints: player4TotalPoints,
      playerTotalWins: player4TotalWins
    },
    {
      playerNo: 5,
      player: player5,
      playerTotalPoints: player5TotalPoints,
      playerTotalWins: player5TotalWins
    },
    {
      playerNo: 6,
      player: player6,
      playerTotalPoints: player6TotalPoints,
      playerTotalWins: player6TotalWins
    }
  ];

  //Reduce total number of elements in results array to the number of players
  const playerResultsWithRightPlayerCount = playerResults.filter(
    (playerResult) => {
      return playerResult.playerNo <= playerCount;
    }
  );

  //Sort the winners table descending by wins, then net points
  const sortedPlayerResults = playerResultsWithRightPlayerCount.sort((a, b) =>
    a.playerTotalWins > b.playerTotalWins
      ? -1
      : a.playerTotalWins < b.playerTotalWins
      ? 1
      : a.playerTotalPoints > b.playerTotalPoints
      ? -1
      : a.playerTotalPoints < b.playerTotalPoints
      ? 1
      : 0
  );

  function handleAllPlayersNewScores(newScore) {
    //Calculate net points for the Team 1 and Team 2

    let team1NetPoints =
      newScore.action === "add"
        ? subtractNumbers(newScore.team1Score, newScore.team2Score)
        : newScore.action === "delete"
        ? subtractNumbers(newScore.team2Score, newScore.team1Score)
        : 0;

    let team2NetPoints = -team1NetPoints;

    let team1Win =
      newScore.action === "add"
        ? team1NetPoints > 0
          ? 1
          : 0
        : newScore.action === "delete"
        ? team1NetPoints < 0
          ? -1
          : 0
        : 0;

    let team2Win =
      newScore.action === "add"
        ? team2NetPoints > 0
          ? 1
          : 0
        : newScore.action === "delete"
        ? team2NetPoints < 0
          ? -1
          : 0
        : 0;

    //Calculate net points and wins for Player 1
    function handlePlayer1NewScore() {
      return newScore.team1FirstPlayer === player1
        ? setPlayer1TotalPoints(
            addNumbers(player1TotalPoints, team1NetPoints)
          ) & setPlayer1TotalWins(addNumbers(player1TotalWins, team1Win))
        : newScore.team1SecondPlayer === player1
        ? setPlayer1TotalPoints(
            addNumbers(player1TotalPoints, team1NetPoints)
          ) & setPlayer1TotalWins(addNumbers(player1TotalWins, team1Win))
        : newScore.team2FirstPlayer === player1
        ? setPlayer1TotalPoints(
            addNumbers(player1TotalPoints, team2NetPoints)
          ) & setPlayer1TotalWins(addNumbers(player1TotalWins, team2Win))
        : newScore.team2SecondPlayer === player1
        ? setPlayer1TotalPoints(
            addNumbers(player1TotalPoints, team2NetPoints)
          ) & setPlayer1TotalWins(addNumbers(player1TotalWins, team2Win))
        : 0;
    }
    handlePlayer1NewScore();

    //Calculate net points and wins for Player 2
    function handlePlayer2NewScore() {
      return newScore.team1FirstPlayer === player2
        ? setPlayer2TotalPoints(
            addNumbers(player2TotalPoints, team1NetPoints)
          ) & setPlayer2TotalWins(addNumbers(player2TotalWins, team1Win))
        : newScore.team1SecondPlayer === player2
        ? setPlayer2TotalPoints(
            addNumbers(player2TotalPoints, team1NetPoints)
          ) & setPlayer2TotalWins(addNumbers(player2TotalWins, team1Win))
        : newScore.team2FirstPlayer === player2
        ? setPlayer2TotalPoints(
            addNumbers(player2TotalPoints, team2NetPoints)
          ) & setPlayer2TotalWins(addNumbers(player2TotalWins, team2Win))
        : newScore.team2SecondPlayer === player2
        ? setPlayer2TotalPoints(
            addNumbers(player2TotalPoints, team2NetPoints)
          ) & setPlayer2TotalWins(addNumbers(player2TotalWins, team2Win))
        : 0;
    }
    handlePlayer2NewScore();

    function handlePlayer3NewScore() {
      return newScore.team1FirstPlayer === player3
        ? setPlayer3TotalPoints(
            addNumbers(player3TotalPoints, team1NetPoints)
          ) & setPlayer3TotalWins(addNumbers(player3TotalWins, team1Win))
        : newScore.team1SecondPlayer === player3
        ? setPlayer3TotalPoints(
            addNumbers(player3TotalPoints, team1NetPoints)
          ) & setPlayer3TotalWins(addNumbers(player3TotalWins, team1Win))
        : newScore.team2FirstPlayer === player3
        ? setPlayer3TotalPoints(
            addNumbers(player3TotalPoints, team2NetPoints)
          ) & setPlayer3TotalWins(addNumbers(player3TotalWins, team2Win))
        : newScore.team2SecondPlayer === player3
        ? setPlayer3TotalPoints(
            addNumbers(player3TotalPoints, team2NetPoints)
          ) & setPlayer3TotalWins(addNumbers(player3TotalWins, team2Win))
        : 0;
    }
    handlePlayer3NewScore();

    function handlePlayer4NewScore() {
      return newScore.team1FirstPlayer === player4
        ? setPlayer4TotalPoints(
            addNumbers(player4TotalPoints, team1NetPoints)
          ) & setPlayer4TotalWins(addNumbers(player4TotalWins, team1Win))
        : newScore.team1SecondPlayer === player4
        ? setPlayer4TotalPoints(
            addNumbers(player4TotalPoints, team1NetPoints)
          ) & setPlayer4TotalWins(addNumbers(player4TotalWins, team1Win))
        : newScore.team2FirstPlayer === player4
        ? setPlayer4TotalPoints(
            addNumbers(player4TotalPoints, team2NetPoints)
          ) & setPlayer4TotalWins(addNumbers(player4TotalWins, team2Win))
        : newScore.team2SecondPlayer === player4
        ? setPlayer4TotalPoints(
            addNumbers(player4TotalPoints, team2NetPoints)
          ) & setPlayer4TotalWins(addNumbers(player4TotalWins, team2Win))
        : 0;
    }
    handlePlayer4NewScore();

    function handlePlayer5NewScore() {
      return newScore.team1FirstPlayer === player5
        ? setPlayer5TotalPoints(
            addNumbers(player5TotalPoints, team1NetPoints)
          ) & setPlayer5TotalWins(addNumbers(player5TotalWins, team1Win))
        : newScore.team1SecondPlayer === player5
        ? setPlayer5TotalPoints(
            addNumbers(player5TotalPoints, team1NetPoints)
          ) & setPlayer5TotalWins(addNumbers(player5TotalWins, team1Win))
        : newScore.team2FirstPlayer === player5
        ? setPlayer5TotalPoints(
            addNumbers(player5TotalPoints, team2NetPoints)
          ) & setPlayer5TotalWins(addNumbers(player5TotalWins, team2Win))
        : newScore.team2SecondPlayer === player5
        ? setPlayer5TotalPoints(
            addNumbers(player5TotalPoints, team2NetPoints)
          ) & setPlayer5TotalWins(addNumbers(player5TotalWins, team2Win))
        : 0;
    }
    handlePlayer5NewScore();

    function handlePlayer6NewScore() {
      return newScore.team1FirstPlayer === player6
        ? setPlayer6TotalPoints(
            addNumbers(player6TotalPoints, team1NetPoints)
          ) & setPlayer6TotalWins(addNumbers(player6TotalWins, team1Win))
        : newScore.team1SecondPlayer === player6
        ? setPlayer6TotalPoints(
            addNumbers(player6TotalPoints, team1NetPoints)
          ) & setPlayer6TotalWins(addNumbers(player6TotalWins, team1Win))
        : newScore.team2FirstPlayer === player6
        ? setPlayer6TotalPoints(
            addNumbers(player6TotalPoints, team2NetPoints)
          ) & setPlayer6TotalWins(addNumbers(player6TotalWins, team2Win))
        : newScore.team2SecondPlayer === player6
        ? setPlayer6TotalPoints(
            addNumbers(player6TotalPoints, team2NetPoints)
          ) & setPlayer6TotalWins(addNumbers(player6TotalWins, team2Win))
        : 0;
    }
    handlePlayer6NewScore();
  }

  const [gameScores, setGameScores] = useState([]);
  // const [newScore, setNewScore] = useState({});

  function addGameScore(addedScore) {
    const addAction = { action: "add" };
    const updatedAddedScore = Object.assign(addedScore, addAction);

    //Add new score from wich wins and net points are extracted/calculated
    // setNewScore(updatedAddedScore);

    let newScore = updatedAddedScore;
    console.log(newScore);

    //Add one new game score to the array for rendering
    setGameScores((prevScores) => {
      return [...prevScores, updatedAddedScore];
    });

    //Set game scores in ascending order
    setGameScores((prevScores) => {
      return prevScores.sort((a, b) =>
        a.gameNo > b.gamenNo ? 1 : a.gameNo < b.gameNo ? -1 : 0
      );
    });

    handleAllPlayersNewScores(newScore);
    handleResultsAreSubmitted();
  }

  function handleResultsAreSubmitted() {
    const gameResultsAreSubmitted = true;
    setGameResultsAreSubmitted(gameResultsAreSubmitted);
  }

  // When editing the game score the specific game gets deleted from gameScores array
  const [deletedGameScore, setDeletedGameScore] = useState({});

  function deleteGameScore(id) {
    const newDeletedGameScore = gameScores.find((gameScoreItem) => {
      return gameScoreItem.gameNo === id;
    });

    ///Change property "action" to be able to differentiate deleted scores from added scores
    const deleteAction = { action: "delete" };
    const updatedDeletedScore = Object.assign(
      newDeletedGameScore,
      deleteAction
    );

    setDeletedGameScore(updatedDeletedScore);

    //Define variable newScore from wich wins and net points for all players are calculated
    //when adding or editing (deleting) game score
    let newScore = updatedDeletedScore;

    setGameScores((prevScores) => {
      return prevScores.filter((gameScoreItem) => {
        return gameScoreItem.gameNo !== id;
      });
    });

    handleAllPlayersNewScores(newScore);
  }

  // Create Results Table for every game with submitted score
  function createResultsTable(gameScoreItem, index) {
    return (
      <ResultCard
        key={index}
        id={gameScoreItem.gameNo}
        gameNo={gameScoreItem.gameNo}
        team1Score={gameScoreItem.team1Score}
        team2Score={gameScoreItem.team2Score}
        team1FirstPlayer={gameScoreItem.team1FirstPlayer}
        team1SecondPlayer={gameScoreItem.team1SecondPlayer}
        team2FirstPlayer={gameScoreItem.team2FirstPlayer}
        team2SecondPlayer={gameScoreItem.team2SecondPlayer}
      />
    );
  }

  //Create Winners Table from individual player results
  function createWinnersTable(winnerItem, index, newScore) {
    return (
      <WinnersTableRow
        // key={scoreInfo.id}
        rowNo={index + 1}
        playerNo={winnerItem.playerNo}
        player={winnerItem.player}
        playerTotalPoints={winnerItem.playerTotalPoints}
        playerTotalWins={winnerItem.playerTotalWins}
      />
    );
  }

  function refreshPage() {
    window.location.reload(false);
}

  return (
    <Container maxWidth="md">
      <Header />
      <Grid container>
        {!playersAreSubmitted && (
          <Grid item xs={12} mt={3}>
            <h1>How many players today? </h1>
            <Stack
              justifyContent="center"
              spacing={6}
              direction="row"
              mt={3}
              mb={2}
              alignItems="center"
            >
              <Button
                variant="contained"
                size="large"
                onClick={handlePlayerCount}
                value="4"
              >
                4
              </Button>
              <Button
                variant="contained"
                size="large"
                onClick={handlePlayerCount}
                value="5"
              >
                5
              </Button>
              <Button
                variant="contained"
                size="large"
                onClick={handlePlayerCount}
                value="6"
              >
                6
              </Button>
            </Stack>
          </Grid>
        )}
      </Grid>

      {!playersAreSubmitted && (
        <Grid container spacing={2}>
          {inputsToShow.map(createPlayerInput)}
        </Grid>
      )}

      {playerCount > 0 && !playersAreSubmitted && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="center" mt={2} mb={6}>
              <Button
                variant="contained"
                size="large"
                onClick={createSchedule}
                type="submit"
              >
                Create Tournament Schedule
              </Button>
            </Stack>
          </Grid>
        </Grid>
      )}

      {!playersAreSubmitted && (
        <Grid item xs={12} mt={8}>
          <h3>What is this app for?</h3>
          <br></br>
          <p>Do you like to play beach volleyball with your friends?</p>
          <br></br>
          <p>
            Why not add some competitive edge and play "King of The Beach" style
            tournament where everyone has to play against everyone. This app
            helps to create tournament schedule for 4 to 6 players, register
            game results and calculate the winner.
          </p>
          <br></br>
          <p>Let's play!</p>
        </Grid>
      )}

      {playersAreSubmitted && (
        <Grid container spacing={2}>
          <Grid item xs={12} mt={2}>
            <h1 id="schedule">Tournament Schedule</h1>
          </Grid>
          {actualSchedule.map(createGame)}
        </Grid>
      )}
      {playersAreSubmitted && playerCount < 6 && (
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} mt={3}>
            <h3>
              Add second round of games?
              <Switch
                checked={addSecondRound}
                onChange={handleSecondRoundSwitch}
              />
            </h3>
          </Grid>
        </Grid>
      )}
      {/* <Footer /> */}
      <Grid container>
        <Grid item xs={12}>
          {gameResultsAreSubmitted && (
            <div className="game-scores" id="scores">
              <h1>Game Scores</h1>
              {gameScores.map(createResultsTable)}
            </div>
          )}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          {gameResultsAreSubmitted && (
            <div className="winners-table">
              <h1 id="winners-table">Winners Table</h1>
              <div className="result top">
                <Stack
                  spacing={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  divider={<Divider orientation="vertical" flexItem />}
                >
                  <span>
                    <p>Place</p>
                  </span>
                  <div>
                    <p>Player</p>
                  </div>
                  <span>
                    <p>Wins</p>
                  </span>
                  <span>
                    <p>Net points</p>
                  </span>
                </Stack>
              </div>
              {sortedPlayerResults.map(createWinnersTable)}
              <button onClick={refreshPage}>Push the button</button>
            </div>
          )}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} mb={3}>
          {gameResultsAreSubmitted && <SimpleBottomNavigation onRestart={refreshPage} />}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
