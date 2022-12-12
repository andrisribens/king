import React, { useEffect, useState } from 'react';
import * as htmlToImage from 'html-to-image';
import Header from './Header';
import Footer from './Footer';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GameCard from './GameCard';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PlayerInputField from './PlayerInputField.jsx';
import ResultCard from './ResultCard.jsx';
import WinnersTableRow from './WinnersTableRow.jsx';
import SimpleBottomNavigation from './SimpleBottomNavigation.jsx';
import RestartDialog from './RestartDialog';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DownloadIcon from '@mui/icons-material/Download';
import Alert from '@mui/material/Alert';
import ButtonGroup from '@mui/material/ButtonGroup';

function App() {
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

  const [playerCount, setPlayerCount] = useStickyState('', 'playercount');
  const [playerAlertOpen, setPlayerAlertOpen] = useState(false);
  const [playersAreSubmitted, setPlayersAreSubmitted] = useStickyState(
    false,
    'playersAreSubmitted'
  );
  const [gameResultsAreSubmitted, setGameResultsAreSubmitted] = useStickyState(
    false,
    'gameResultsAreSubmitted'
  );
  const addNumbers = (a, b) => {
    return Number(a) + Number(b);
  };
  const subtractNumbers = (a, b) => {
    return Number(a) - Number(b);
  };

  const playerInputs = [
    { id: 1, name: 'player1', value: '', label: 'Add Player 1' },
    { id: 2, name: 'player2', value: '', label: 'Add Player 2' },
    { id: 3, name: 'player3', value: '', label: 'Add Player 3' },
    { id: 4, name: 'player4', value: '', label: 'Add Player 4' },
    { id: 5, name: 'player5', value: '', label: 'Add Player 5' },
    { id: 6, name: 'player6', value: '', label: 'Add Player 6' },
    { id: 7, name: 'player7', value: '', label: 'Add Player 7' },
    { id: 8, name: 'player8', value: '', label: 'Add Player 8' },
  ];

  const inputsToShow = playerInputs.filter(
    (playerInput, id) => id < playerCount
  );

  function handlePlayerCount(event) {
    setPlayerCount(
      event.target.value === '8'
        ? 8
        : event.target.value === '7'
        ? 7
        : event.target.value === '6'
        ? 6
        : event.target.value === '5'
        ? 5
        : 4
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

  const [players, setPlayers] = useStickyState([], 'players');

  function handleChange(event) {
    const { name, value } = event.target;

    setPlayers((prevPlayer) => {
      return {
        ...prevPlayer,
        [name]: value,
      };
    });
  }

  //Check if enough player names are entered
  const enteredPlayersCount = Object.keys(players).length;

  const handleSubmitPlayers = () =>
    enteredPlayersCount === playerCount
      ? setPlayersAreSubmitted(true) & setPlayerAlertOpen(false)
      : setPlayerAlertOpen(true);

  const player1 = players.player1;
  const player2 = players.player2;
  const player3 = players.player3;
  const player4 = players.player4;
  const player5 = players.player5;
  const player6 = players.player6;
  const player7 = players.player7;
  const player8 = players.player8;

  //Schedule formula gives:
  //4 rounds for 4 players,
  //3 rounds for 5 players,
  //1 round for 6-8 players

  //Four rounds of four player schedule scheme
  const fourPlayerSchedule = [
    {
      gameNo: 1,
      team1FirstPlayer: player1,
      team1SecondPlayer: player4,
      team2FirstPlayer: player2,
      team2SecondPlayer: player3,
    },
    {
      gameNo: 2,
      team1FirstPlayer: player1,
      team1SecondPlayer: player3,
      team2FirstPlayer: player2,
      team2SecondPlayer: player4,
    },
    {
      gameNo: 3,
      team1FirstPlayer: player1,
      team1SecondPlayer: player2,
      team2FirstPlayer: player3,
      team2SecondPlayer: player4,
    },
    {
      gameNo: 4,
      team1FirstPlayer: player2,
      team1SecondPlayer: player3,
      team2FirstPlayer: player1,
      team2SecondPlayer: player4,
    },
    {
      gameNo: 5,
      team1FirstPlayer: player2,
      team1SecondPlayer: player4,
      team2FirstPlayer: player1,
      team2SecondPlayer: player3,
    },
    {
      gameNo: 6,
      team1FirstPlayer: player3,
      team1SecondPlayer: player4,
      team2FirstPlayer: player1,
      team2SecondPlayer: player2,
    },
    {
      gameNo: 7,
      team1FirstPlayer: player1,
      team1SecondPlayer: player4,
      team2FirstPlayer: player2,
      team2SecondPlayer: player3,
    },
    {
      gameNo: 8,
      team1FirstPlayer: player1,
      team1SecondPlayer: player3,
      team2FirstPlayer: player2,
      team2SecondPlayer: player4,
    },
    {
      gameNo: 9,
      team1FirstPlayer: player1,
      team1SecondPlayer: player2,
      team2FirstPlayer: player3,
      team2SecondPlayer: player4,
    },
    {
      gameNo: 10,
      team1FirstPlayer: player2,
      team1SecondPlayer: player3,
      team2FirstPlayer: player1,
      team2SecondPlayer: player4,
    },
    {
      gameNo: 11,
      team1FirstPlayer: player2,
      team1SecondPlayer: player4,
      team2FirstPlayer: player1,
      team2SecondPlayer: player3,
    },
    {
      gameNo: 12,
      team1FirstPlayer: player3,
      team1SecondPlayer: player4,
      team2FirstPlayer: player1,
      team2SecondPlayer: player2,
    },
  ];

  //Three rounds of five player schedule scheme
  const fivePlayerSchedule = [
    {
      gameNo: 1,
      team1FirstPlayer: player1,
      team1SecondPlayer: player2,
      team2FirstPlayer: player3,
      team2SecondPlayer: player4,
    },
    {
      gameNo: 2,
      team1FirstPlayer: player2,
      team1SecondPlayer: player3,
      team2FirstPlayer: player4,
      team2SecondPlayer: player5,
    },
    {
      gameNo: 3,
      team1FirstPlayer: player1,
      team1SecondPlayer: player4,
      team2FirstPlayer: player3,
      team2SecondPlayer: player5,
    },
    {
      gameNo: 4,
      team1FirstPlayer: player1,
      team1SecondPlayer: player5,
      team2FirstPlayer: player2,
      team2SecondPlayer: player4,
    },
    {
      gameNo: 5,
      team1FirstPlayer: player1,
      team1SecondPlayer: player3,
      team2FirstPlayer: player2,
      team2SecondPlayer: player5,
    },
    {
      gameNo: 6,
      team1FirstPlayer: player1,
      team1SecondPlayer: player4,
      team2FirstPlayer: player2,
      team2SecondPlayer: player3,
    },
    {
      gameNo: 7,
      team1FirstPlayer: player2,
      team1SecondPlayer: player4,
      team2FirstPlayer: player3,
      team2SecondPlayer: player5,
    },
    {
      gameNo: 8,
      team1FirstPlayer: player1,
      team1SecondPlayer: player3,
      team2FirstPlayer: player4,
      team2SecondPlayer: player5,
    },
    {
      gameNo: 9,
      team1FirstPlayer: player1,
      team1SecondPlayer: player4,
      team2FirstPlayer: player2,
      team2SecondPlayer: player5,
    },
    {
      gameNo: 10,
      team1FirstPlayer: player1,
      team1SecondPlayer: player2,
      team2FirstPlayer: player3,
      team2SecondPlayer: player5,
    },
    {
      gameNo: 11,
      team1FirstPlayer: player1,
      team1SecondPlayer: player3,
      team2FirstPlayer: player2,
      team2SecondPlayer: player4,
    },
    {
      gameNo: 12,
      team1FirstPlayer: player3,
      team1SecondPlayer: player4,
      team2FirstPlayer: player2,
      team2SecondPlayer: player5,
    },
    {
      gameNo: 13,
      team1FirstPlayer: player1,
      team1SecondPlayer: player5,
      team2FirstPlayer: player3,
      team2SecondPlayer: player4,
    },
    {
      gameNo: 14,
      team1FirstPlayer: player1,
      team1SecondPlayer: player2,
      team2FirstPlayer: player4,
      team2SecondPlayer: player5,
    },
    {
      gameNo: 15,
      team1FirstPlayer: player1,
      team1SecondPlayer: player5,
      team2FirstPlayer: player2,
      team2SecondPlayer: player3,
    },
  ];

  //One round of six player schedule scheme
  const sixPlayerSchedule = [
    {
      gameNo: 1,
      team1FirstPlayer: player3,
      team1SecondPlayer: player6,
      team2FirstPlayer: player1,
      team2SecondPlayer: player2,
    },
    {
      gameNo: 2,
      team1FirstPlayer: player6,
      team1SecondPlayer: player2,
      team2FirstPlayer: player5,
      team2SecondPlayer: player3,
    },
    {
      gameNo: 3,
      team1FirstPlayer: player4,
      team1SecondPlayer: player3,
      team2FirstPlayer: player2,
      team2SecondPlayer: player5,
    },
    {
      gameNo: 4,
      team1FirstPlayer: player2,
      team1SecondPlayer: player4,
      team2FirstPlayer: player3,
      team2SecondPlayer: player1,
    },
    {
      gameNo: 5,
      team1FirstPlayer: player1,
      team1SecondPlayer: player5,
      team2FirstPlayer: player6,
      team2SecondPlayer: player4,
    },
    {
      gameNo: 6,
      team1FirstPlayer: player1,
      team1SecondPlayer: player2,
      team2FirstPlayer: player4,
      team2SecondPlayer: player5,
    },
    {
      gameNo: 7,
      team1FirstPlayer: player5,
      team1SecondPlayer: player3,
      team2FirstPlayer: player1,
      team2SecondPlayer: player4,
    },
    {
      gameNo: 8,
      team1FirstPlayer: player2,
      team1SecondPlayer: player5,
      team2FirstPlayer: player6,
      team2SecondPlayer: player1,
    },
    {
      gameNo: 9,
      team1FirstPlayer: player3,
      team1SecondPlayer: player1,
      team2FirstPlayer: player5,
      team2SecondPlayer: player6,
    },
    {
      gameNo: 10,
      team1FirstPlayer: player6,
      team1SecondPlayer: player4,
      team2FirstPlayer: player2,
      team2SecondPlayer: player3,
    },
    {
      gameNo: 11,
      team1FirstPlayer: player3,
      team1SecondPlayer: player6,
      team2FirstPlayer: player4,
      team2SecondPlayer: player5,
    },
    {
      gameNo: 12,
      team1FirstPlayer: player6,
      team1SecondPlayer: player2,
      team2FirstPlayer: player1,
      team2SecondPlayer: player4,
    },
    {
      gameNo: 13,
      team1FirstPlayer: player4,
      team1SecondPlayer: player3,
      team2FirstPlayer: player6,
      team2SecondPlayer: player1,
    },
    {
      gameNo: 14,
      team1FirstPlayer: player2,
      team1SecondPlayer: player4,
      team2FirstPlayer: player5,
      team2SecondPlayer: player6,
    },
    {
      gameNo: 15,
      team1FirstPlayer: player1,
      team1SecondPlayer: player5,
      team2FirstPlayer: player2,
      team2SecondPlayer: player3,
    },
  ];

  //One round of seven player schedule scheme
  const sevenPlayerSchedule = [
    {
      gameNo: 1,
      team1FirstPlayer: player4,
      team1SecondPlayer: player7,
      team2FirstPlayer: player5,
      team2SecondPlayer: player6,
    },
    {
      gameNo: 2,
      team1FirstPlayer: player2,
      team1SecondPlayer: player3,
      team2FirstPlayer: player4,
      team2SecondPlayer: player5,
    },
    {
      gameNo: 3,
      team1FirstPlayer: player1,
      team1SecondPlayer: player5,
      team2FirstPlayer: player2,
      team2SecondPlayer: player6,
    },
    {
      gameNo: 4,
      team1FirstPlayer: player4,
      team1SecondPlayer: player6,
      team2FirstPlayer: player1,
      team2SecondPlayer: player3,
    },
    {
      gameNo: 5,
      team1FirstPlayer: player2,
      team1SecondPlayer: player5,
      team2FirstPlayer: player1,
      team2SecondPlayer: player6,
    },
    {
      gameNo: 6,
      team1FirstPlayer: player4,
      team1SecondPlayer: player7,
      team2FirstPlayer: player1,
      team2SecondPlayer: player2,
    },
    {
      gameNo: 7,
      team1FirstPlayer: player3,
      team1SecondPlayer: player6,
      team2FirstPlayer: player1,
      team2SecondPlayer: player4,
    },
    {
      gameNo: 8,
      team1FirstPlayer: player2,
      team1SecondPlayer: player3,
      team2FirstPlayer: player6,
      team2SecondPlayer: player7,
    },
    {
      gameNo: 9,
      team1FirstPlayer: player1,
      team1SecondPlayer: player5,
      team2FirstPlayer: player3,
      team2SecondPlayer: player7,
    },
    {
      gameNo: 10,
      team1FirstPlayer: player1,
      team1SecondPlayer: player7,
      team2FirstPlayer: player3,
      team2SecondPlayer: player5,
    },
    {
      gameNo: 11,
      team1FirstPlayer: player4,
      team1SecondPlayer: player6,
      team2FirstPlayer: player5,
      team2SecondPlayer: player7,
    },
    {
      gameNo: 12,
      team1FirstPlayer: player2,
      team1SecondPlayer: player5,
      team2FirstPlayer: player3,
      team2SecondPlayer: player4,
    },
    {
      gameNo: 13,
      team1FirstPlayer: player3,
      team1SecondPlayer: player6,
      team2FirstPlayer: player2,
      team2SecondPlayer: player7,
    },
    {
      gameNo: 14,
      team1FirstPlayer: player1,
      team1SecondPlayer: player7,
      team2FirstPlayer: player2,
      team2SecondPlayer: player4,
    },
  ];

  //One round of eight player schedule scheme
  const eightPlayerSchedule = [
    {
      gameNo: 1,
      team1FirstPlayer: player1,
      team1SecondPlayer: player2,
      team2FirstPlayer: player3,
      team2SecondPlayer: player4,
    },
    {
      gameNo: 2,
      team1FirstPlayer: player5,
      team1SecondPlayer: player6,
      team2FirstPlayer: player7,
      team2SecondPlayer: player8,
    },
    {
      gameNo: 3,
      team1FirstPlayer: player1,
      team1SecondPlayer: player5,
      team2FirstPlayer: player2,
      team2SecondPlayer: player6,
    },
    {
      gameNo: 4,
      team1FirstPlayer: player3,
      team1SecondPlayer: player7,
      team2FirstPlayer: player4,
      team2SecondPlayer: player8,
    },
    {
      gameNo: 5,
      team1FirstPlayer: player1,
      team1SecondPlayer: player7,
      team2FirstPlayer: player2,
      team2SecondPlayer: player8,
    },
    {
      gameNo: 6,
      team1FirstPlayer: player3,
      team1SecondPlayer: player5,
      team2FirstPlayer: player4,
      team2SecondPlayer: player6,
    },
    {
      gameNo: 7,
      team1FirstPlayer: player1,
      team1SecondPlayer: player3,
      team2FirstPlayer: player5,
      team2SecondPlayer: player7,
    },
    {
      gameNo: 8,
      team1FirstPlayer: player2,
      team1SecondPlayer: player4,
      team2FirstPlayer: player6,
      team2SecondPlayer: player8,
    },
    {
      gameNo: 9,
      team1FirstPlayer: player1,
      team1SecondPlayer: player8,
      team2FirstPlayer: player3,
      team2SecondPlayer: player6,
    },
    {
      gameNo: 10,
      team1FirstPlayer: player2,
      team1SecondPlayer: player7,
      team2FirstPlayer: player4,
      team2SecondPlayer: player5,
    },
    {
      gameNo: 11,
      team1FirstPlayer: player1,
      team1SecondPlayer: player4,
      team2FirstPlayer: player5,
      team2SecondPlayer: player8,
    },
    {
      gameNo: 12,
      team1FirstPlayer: player2,
      team1SecondPlayer: player3,
      team2FirstPlayer: player6,
      team2SecondPlayer: player7,
    },
    {
      gameNo: 13,
      team1FirstPlayer: player1,
      team1SecondPlayer: player6,
      team2FirstPlayer: player4,
      team2SecondPlayer: player7,
    },
    {
      gameNo: 14,
      team1FirstPlayer: player2,
      team1SecondPlayer: player5,
      team2FirstPlayer: player3,
      team2SecondPlayer: player8,
    },
  ];

  //Filter schedule for one round tournament
  const oneRoundFourPlayerSchedule = fourPlayerSchedule.filter((game) => {
    return game.gameNo <= 3;
  });
  const oneRoundFivePlayerSchedule = fivePlayerSchedule.filter((game) => {
    return game.gameNo <= 5;
  });

  //Filter schedule for two round tournament
  const twoRoundFourPlayerSchedule = fourPlayerSchedule.filter((game) => {
    return game.gameNo <= 6;
  });
  const twoRoundFivePlayerSchedule = fivePlayerSchedule.filter((game) => {
    return game.gameNo <= 10;
  });

  //Filter schedule for three round tournament (applies only for 4 players)
  const threeRoundFourPlayerSchedule = fourPlayerSchedule.filter((game) => {
    return game.gameNo <= 9;
  });

  //State and function to handle button for second & third rounds of games
  const [addSecondRound, setAddSecondRound] = useStickyState(
    false,
    'addSecondRound'
  );
  const [addThirdRound, setAddThirdRound] = useStickyState(
    false,
    'addThirdRound'
  );
  const [addFourthRound, setAddFourthRound] = useStickyState(
    false,
    'addFourthRound'
  );

  const handleMoreGamesButton = () => {
    addThirdRound
      ? setAddFourthRound(true)
      : addSecondRound
      ? setAddThirdRound(true)
      : setAddSecondRound(true);
  };

  const actualSchedule =
    playerCount === 4
      ? addFourthRound
        ? fourPlayerSchedule
        : addThirdRound
        ? threeRoundFourPlayerSchedule
        : addSecondRound
        ? twoRoundFourPlayerSchedule
        : oneRoundFourPlayerSchedule
      : playerCount === 5
      ? addSecondRound
        ? addThirdRound
          ? fivePlayerSchedule
          : twoRoundFivePlayerSchedule
        : oneRoundFivePlayerSchedule
      : playerCount === 6
      ? sixPlayerSchedule
      : playerCount === 7
      ? sevenPlayerSchedule
      : eightPlayerSchedule;

  function createSchedule() {
    handleSubmitPlayers();
    return actualSchedule;
  }

  function createGame(gameInfo) {
    return (
      <Grid item xs={12} sm={6} lg={4}>
        <GameCard
          key={gameInfo.gameNo}
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

  const [player1TotalPoints, setPlayer1TotalPoints] = useStickyState(
    0,
    'player1TotalPoints'
  );
  const [player2TotalPoints, setPlayer2TotalPoints] = useStickyState(
    0,
    'player2TotalPoints'
  );
  const [player3TotalPoints, setPlayer3TotalPoints] = useStickyState(
    0,
    'player3TotalPoints'
  );
  const [player4TotalPoints, setPlayer4TotalPoints] = useStickyState(
    0,
    'player4TotalPoints'
  );
  const [player5TotalPoints, setPlayer5TotalPoints] = useStickyState(
    0,
    'player5TotalPoints'
  );
  const [player6TotalPoints, setPlayer6TotalPoints] = useStickyState(
    0,
    'player6TotalPoints'
  );
  const [player7TotalPoints, setPlayer7TotalPoints] = useStickyState(
    0,
    'player7TotalPoints'
  );
  const [player8TotalPoints, setPlayer8TotalPoints] = useStickyState(
    0,
    'player8TotalPoints'
  );

  const [player1TotalWins, setPlayer1TotalWins] = useStickyState(
    0,
    'player1TotalWins'
  );
  const [player2TotalWins, setPlayer2TotalWins] = useStickyState(
    0,
    'player2TotalWins'
  );
  const [player3TotalWins, setPlayer3TotalWins] = useStickyState(
    0,
    'player3TotalWins'
  );
  const [player4TotalWins, setPlayer4TotalWins] = useStickyState(
    0,
    'player4TotalWins'
  );
  const [player5TotalWins, setPlayer5TotalWins] = useStickyState(
    0,
    'player5TotalWins'
  );
  const [player6TotalWins, setPlayer6TotalWins] = useStickyState(
    0,
    'player6TotalWins'
  );
  const [player7TotalWins, setPlayer7TotalWins] = useStickyState(
    0,
    'player7TotalWins'
  );
  const [player8TotalWins, setPlayer8TotalWins] = useStickyState(
    0,
    'player8TotalWins'
  );

  const playerResults = [
    {
      playerNo: 1,
      player: player1,
      playerTotalPoints: player1TotalPoints,
      playerTotalWins: player1TotalWins,
    },
    {
      playerNo: 2,
      player: player2,
      playerTotalPoints: player2TotalPoints,
      playerTotalWins: player2TotalWins,
    },
    {
      playerNo: 3,
      player: player3,
      playerTotalPoints: player3TotalPoints,
      playerTotalWins: player3TotalWins,
    },
    {
      playerNo: 4,
      player: player4,
      playerTotalPoints: player4TotalPoints,
      playerTotalWins: player4TotalWins,
    },
    {
      playerNo: 5,
      player: player5,
      playerTotalPoints: player5TotalPoints,
      playerTotalWins: player5TotalWins,
    },
    {
      playerNo: 6,
      player: player6,
      playerTotalPoints: player6TotalPoints,
      playerTotalWins: player6TotalWins,
    },
    {
      playerNo: 7,
      player: player7,
      playerTotalPoints: player7TotalPoints,
      playerTotalWins: player7TotalWins,
    },
    {
      playerNo: 8,
      player: player8,
      playerTotalPoints: player8TotalPoints,
      playerTotalWins: player8TotalWins,
    },
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
      newScore.action === 'add'
        ? subtractNumbers(newScore.team1Score, newScore.team2Score)
        : newScore.action === 'delete'
        ? subtractNumbers(newScore.team2Score, newScore.team1Score)
        : 0;

    let team2NetPoints = -team1NetPoints;

    let team1Win =
      newScore.action === 'add'
        ? team1NetPoints > 0
          ? 1
          : 0
        : newScore.action === 'delete'
        ? team1NetPoints < 0
          ? -1
          : 0
        : 0;

    let team2Win =
      newScore.action === 'add'
        ? team2NetPoints > 0
          ? 1
          : 0
        : newScore.action === 'delete'
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

    function handlePlayer7NewScore() {
      return newScore.team1FirstPlayer === player7
        ? setPlayer7TotalPoints(
            addNumbers(player7TotalPoints, team1NetPoints)
          ) & setPlayer7TotalWins(addNumbers(player7TotalWins, team1Win))
        : newScore.team1SecondPlayer === player7
        ? setPlayer7TotalPoints(
            addNumbers(player7TotalPoints, team1NetPoints)
          ) & setPlayer7TotalWins(addNumbers(player7TotalWins, team1Win))
        : newScore.team2FirstPlayer === player7
        ? setPlayer7TotalPoints(
            addNumbers(player7TotalPoints, team2NetPoints)
          ) & setPlayer7TotalWins(addNumbers(player7TotalWins, team2Win))
        : newScore.team2SecondPlayer === player7
        ? setPlayer7TotalPoints(
            addNumbers(player7TotalPoints, team2NetPoints)
          ) & setPlayer7TotalWins(addNumbers(player7TotalWins, team2Win))
        : 0;
    }
    handlePlayer7NewScore();

    function handlePlayer8NewScore() {
      return newScore.team1FirstPlayer === player8
        ? setPlayer8TotalPoints(
            addNumbers(player8TotalPoints, team1NetPoints)
          ) & setPlayer8TotalWins(addNumbers(player8TotalWins, team1Win))
        : newScore.team1SecondPlayer === player8
        ? setPlayer8TotalPoints(
            addNumbers(player8TotalPoints, team1NetPoints)
          ) & setPlayer8TotalWins(addNumbers(player8TotalWins, team1Win))
        : newScore.team2FirstPlayer === player8
        ? setPlayer8TotalPoints(
            addNumbers(player8TotalPoints, team2NetPoints)
          ) & setPlayer8TotalWins(addNumbers(player8TotalWins, team2Win))
        : newScore.team2SecondPlayer === player8
        ? setPlayer8TotalPoints(
            addNumbers(player8TotalPoints, team2NetPoints)
          ) & setPlayer8TotalWins(addNumbers(player8TotalWins, team2Win))
        : 0;
    }
    handlePlayer8NewScore();
  }

  const [gameScores, setGameScores] = useStickyState([], 'gameScores');

  function addGameScore(addedScore) {
    const addAction = { action: 'add' };
    const updatedAddedScore = Object.assign(addedScore, addAction);

    let newScore = updatedAddedScore;

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
  // const [deletedGameScore, setDeletedGameScore] = useState({});

  function deleteGameScore(id) {
    const newDeletedGameScore = gameScores.find((gameScoreItem) => {
      return gameScoreItem.gameNo === id;
    });

    ///Change property "action" to be able to differentiate deleted scores from added scores
    const deleteAction = { action: 'delete' };
    const updatedDeletedScore = Object.assign(
      newDeletedGameScore,
      deleteAction
    );

    // setDeletedGameScore(updatedDeletedScore);

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
  function createResultsTable(gameScoreItem) {
    return (
      <ResultCard
        key={gameScoreItem.gameNo}
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
        rowNo={index + 1}
        playerNo={winnerItem.playerNo}
        player={winnerItem.player}
        playerTotalPoints={winnerItem.playerTotalPoints}
        playerTotalWins={winnerItem.playerTotalWins}
      />
    );
  }

  const [isRestartDialogOpen, setIsRestarDialogOpen] = useState(false);

  function handleRestartDialog() {
    setIsRestarDialogOpen(!isRestartDialogOpen);
  }

  //Get current time to generate unique results file name
  const time = new Date();
  const dateAndTime =
    time.getFullYear() +
    '-' +
    (time.getMonth() + 1) +
    '-' +
    time.getDate() +
    '/' +
    time.getHours() +
    '-' +
    time.getMinutes();
  const resultsFileName = (
    dateAndTime + '/KOB-tournament-results.jpg'
  ).toString();

  //Transform html to jpg and download. This is for results table.
  const downloadResults = () => {
    var node = document.getElementById('download-results');

    // function filter(node) {
    //   return (node.className !== "dont-download");
    // }

    htmlToImage
      .toJpeg(node, {
        // filter: filter,
        quality: 0.95,
        backgroundColor: '#FFFFFF',
      })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = resultsFileName;
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <Container maxWidth="md">
      <Header />
      <Grid container>
        {!playersAreSubmitted && (
          <Grid item xs={12} mt={3}>
            <h1>How many players today? </h1>
            <Stack justifyContent="center" direction="row" mt={3} mb={2}>
              <ButtonGroup fullwidth size="large" variant="contained">
                <Button onClick={handlePlayerCount} value="4" size="large">
                  4
                </Button>
                <Button onClick={handlePlayerCount} value="5">
                  5
                </Button>
                <Button onClick={handlePlayerCount} value="6">
                  6
                </Button>
                <Button onClick={handlePlayerCount} value="7">
                  7
                </Button>
                <Button onClick={handlePlayerCount} value="8">
                  8
                </Button>
              </ButtonGroup>
            </Stack>
          </Grid>
        )}
      </Grid>

      {!playersAreSubmitted && (
        <Grid container spacing={2}>
          {inputsToShow.map(createPlayerInput)}
        </Grid>
      )}
      {playerAlertOpen && (
        <Alert
          severity="warning"
          onClose={() => {
            setPlayerAlertOpen(false);
          }}
        >
          Please enter player names!
        </Alert>
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
          <h3>What is this website for?</h3>
          <br></br>
          <p>Do you like to play beach volleyball with friends?</p>
          <br></br>
          <p>
            Add a competitive edge to your game and play "King of The Beach"
            style tournament where everyone has to compete against everyone.
            This website helps to create tournament schedule for 4 to 8 players,
            register game results and calculate the winner.
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
      {playersAreSubmitted &&
        playerCount < 6 &&
        (playerCount < 5 ? !addFourthRound : !addThirdRound) && (
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} mt={3}>
              <h3>
                Add more games?
                <IconButton
                  aria-label="add-games"
                  size="large"
                  color="primary"
                  onClick={handleMoreGamesButton}
                >
                  <AddCircleIcon fontSize="inherit" />
                </IconButton>
              </h3>
            </Grid>
          </Grid>
        )}

      <div id="download-results">
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
                  <Grid container>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      pr={1}
                    >
                      <p>Place</p>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
                      }}
                      pl={1}
                      pr={1}
                    >
                      <p>Player</p>
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
                    >
                      <p>Wins</p>
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
                    >
                      <p>Net points</p>
                    </Grid>
                  </Grid>
                </div>
                {sortedPlayerResults.map(createWinnersTable)}
              </div>
            )}
          </Grid>
        </Grid>
      </div>

      {gameResultsAreSubmitted && (
        <Grid container>
          <Grid item xs={12}>
            <div className="under-winners-table">
              <Button
                size="small"
                onClick={downloadResults}
                startIcon={<DownloadIcon />}
              >
                Download results
              </Button>
            </div>
          </Grid>
        </Grid>
      )}

      <Footer />
      <Grid container>
        <Grid item xs={12} mb={3}>
          {gameResultsAreSubmitted && (
            <SimpleBottomNavigation onRestart={handleRestartDialog} />
          )}
        </Grid>
      </Grid>

      {isRestartDialogOpen && <RestartDialog onChange={handleRestartDialog} />}
    </Container>
  );
}

export default App;
