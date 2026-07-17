import React, { useState, Suspense, lazy } from 'react';
import { flushSync } from 'react-dom';
import Header from './Header';
import ResultsBrandHeader from './ResultsBrandHeader';
import Footer from './Footer';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GameCard from './GameCard';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PlayerInputField from './PlayerInputField.jsx';
import ResultCard from './ResultCard.jsx';
import WinnersTableRow from './WinnersTableRow.jsx';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DownloadIcon from '@mui/icons-material/Download';
import Alert from '@mui/material/Alert';
import { Analytics } from '@vercel/analytics/react';
import useStickyState from '../hooks/useStickyState';
import { getActualSchedule } from '../schedules';
import { computePlayerResults } from '../scoring';

const SimpleBottomNavigation = lazy(() => import('./SimpleBottomNavigation.jsx'));
const RestartDialog = lazy(() => import('./RestartDialog'));

function App() {
  const [playerCount, setPlayerCount] = useStickyState('', 'playercount');
  const [playerAlertOpen, setPlayerAlertOpen] = useState(false);
  const [playersAreSubmitted, setPlayersAreSubmitted] = useStickyState(
    false,
    'playersAreSubmitted'
  );
  const [players, setPlayers] = useStickyState({}, 'players');
  const [gameScores, setGameScores] = useStickyState([], 'gameScores');
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
  const [isRestartDialogOpen, setIsRestarDialogOpen] = useState(false);
  const [isExportingResults, setIsExportingResults] = useState(false);

  const playerInputs = [
    { id: 1, name: 'player1', label: 'Add Player 1' },
    { id: 2, name: 'player2', label: 'Add Player 2' },
    { id: 3, name: 'player3', label: 'Add Player 3' },
    { id: 4, name: 'player4', label: 'Add Player 4' },
    { id: 5, name: 'player5', label: 'Add Player 5' },
    { id: 6, name: 'player6', label: 'Add Player 6' },
    { id: 7, name: 'player7', label: 'Add Player 7' },
    { id: 8, name: 'player8', label: 'Add Player 8' },
  ];

  const inputsToShow = playerInputs.filter(
    (playerInput, id) => id < playerCount
  );

  function handlePlayerCount(event) {
    setPlayerCount(Number(event.target.value));
  }

  function createPlayerInput(playerInfo) {
    return (
      <PlayerInputField
        key={playerInfo.id}
        name={playerInfo.name}
        label={playerInfo.label}
        value={players[playerInfo.name]}
        onChange={handleChange}
      />
    );
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setPlayers((prevPlayer) => ({
      ...prevPlayer,
      [name]: value,
    }));
  }

  const allPlayerNamesEntered =
    playerCount > 0 &&
    inputsToShow.every(
      (input) => String(players[input.name] ?? '').trim() !== ''
    );

  const handleSubmitPlayers = () =>
    allPlayerNamesEntered
      ? setPlayersAreSubmitted(true) & setPlayerAlertOpen(false)
      : setPlayerAlertOpen(true);

  const actualSchedule = getActualSchedule(
    playerCount,
    { addSecondRound, addThirdRound, addFourthRound },
    players
  );

  const handleMoreGamesButton = () => {
    addThirdRound
      ? setAddFourthRound(true)
      : addSecondRound
        ? setAddThirdRound(true)
        : setAddSecondRound(true);
  };

  function createSchedule() {
    handleSubmitPlayers();
  }

  function createGame(gameInfo) {
    return (
      <Grid item xs={12} sm={6} lg={6} key={gameInfo.gameNo}>
        <GameCard
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

  const gameResultsAreSubmitted = gameScores.length > 0;
  const sortedPlayerResults = computePlayerResults(
    gameScores,
    players,
    playerCount
  );

  function addGameScore(addedScore) {
    setGameScores((prevScores) =>
      [...prevScores, { ...addedScore, action: 'add' }].sort((a, b) =>
        a.gameNo > b.gameNo ? 1 : a.gameNo < b.gameNo ? -1 : 0
      )
    );
  }

  function deleteGameScore(id) {
    setGameScores((prevScores) =>
      prevScores.filter((gameScoreItem) => gameScoreItem.gameNo !== id)
    );
  }

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

  function createWinnersTable(winnerItem, index) {
    return (
      <WinnersTableRow
        key={winnerItem.playerNo}
        rowNo={index + 1}
        playerNo={winnerItem.playerNo}
        player={winnerItem.player}
        playerTotalPoints={winnerItem.playerTotalPoints}
        playerTotalWins={winnerItem.playerTotalWins}
      />
    );
  }

  function handleRestartDialog() {
    setIsRestarDialogOpen(!isRestartDialogOpen);
  }

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

  const downloadResults = async () => {
    const node = document.getElementById('download-results');
    if (!node) return;

    const htmlToImage = await import('html-to-image');

    flushSync(() => {
      setIsExportingResults(true);
    });

    const previous = {
      margin: node.style.margin,
      padding: node.style.padding,
      width: node.style.width,
      maxWidth: node.style.maxWidth,
      boxSizing: node.style.boxSizing,
      transform: node.style.transform,
      overflow: node.style.overflow,
    };

    const sidePad = 10;

    try {
      // Clear negative margin / overflow so full width is measurable
      node.style.margin = '0';
      node.style.padding = '0';
      node.style.boxSizing = 'content-box';
      node.style.width = '100%';
      node.style.maxWidth = '100%';
      node.style.transform = 'none';
      node.style.overflow = 'visible';

      await new Promise((resolve) => requestAnimationFrame(resolve));

      const contentWidth = Math.ceil(
        Math.max(node.scrollWidth, node.offsetWidth, node.clientWidth)
      );
      const contentHeight = Math.ceil(
        Math.max(node.scrollHeight, node.offsetHeight, node.clientHeight)
      );
      const width = contentWidth + sidePad * 2;
      const height = contentHeight + sidePad * 2;

      const dataUrl = await htmlToImage.toJpeg(node, {
        quality: 0.95,
        backgroundColor: '#FFFFFF',
        width,
        height,
        pixelRatio: 2,
        style: {
          margin: '0',
          padding: `${sidePad}px`,
          boxSizing: 'content-box',
          width: `${contentWidth}px`,
          maxWidth: 'none',
          height: `${contentHeight}px`,
          transform: 'none',
          overflow: 'visible',
        },
        scrollX: 0,
        scrollY: 0,
      });
      const link = document.createElement('a');
      link.download = resultsFileName;
      link.href = dataUrl;
      link.click();
    } finally {
      node.style.margin = previous.margin;
      node.style.padding = previous.padding;
      node.style.width = previous.width;
      node.style.maxWidth = previous.maxWidth;
      node.style.boxSizing = previous.boxSizing;
      node.style.transform = previous.transform;
      node.style.overflow = previous.overflow;
      setIsExportingResults(false);
    }
  };

  return (
    <>
      <Header />
      <main className="site-main">
      <Container maxWidth="lg">
        <Grid container>
          {!playersAreSubmitted && (
            <Grid item xs={12} mt={3}>
              <h2 className="main-title">How many players today? </h2>
              <Stack
                justifyContent="center"
                direction="row"
                spacing={1.5}
                mt={3}
                mb={2}
                flexWrap="wrap"
                useFlexGap
              >
                {[4, 5, 6, 7, 8].map((count) => {
                  const selected = Number(playerCount) === count;
                  return (
                    <Button
                      key={count}
                      onClick={handlePlayerCount}
                      value={String(count)}
                      size="large"
                      variant={selected ? 'contained' : 'outlined'}
                      color="primary"
                      aria-pressed={selected}
                      sx={{
                        minWidth: 56,
                        minHeight: 56,
                        borderRadius: '14px',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        fontFamily: "'Orbitron', sans-serif",
                        ...(selected
                          ? {
                              color: '#fff',
                              backgroundColor: '#3d2900',
                              boxShadow: '0 2px 8px rgba(120, 70, 0, 0.28)',
                              '&:hover': {
                                backgroundColor: '#1a1a1a',
                              },
                            }
                          : {
                              color: '#5c3d00',
                              borderColor: 'rgba(92, 61, 0, 0.22)',
                              borderWidth: 1.5,
                              backgroundColor: 'rgba(255, 255, 255, 0.65)',
                              '&:hover': {
                                borderWidth: 1.5,
                                borderColor: 'rgba(92, 61, 0, 0.4)',
                                backgroundColor: 'rgba(245, 186, 19, 0.18)',
                              },
                            }),
                      }}
                    >
                      {count}
                    </Button>
                  );
                })}
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
              This website helps to create tournament schedule for 4 to 8 players
              (it's hard to get more friends together :) ).
            </p>
            <br></br>
            <p>
              "King of the Beach" tournament formula allows you to play equal
              number of games against every opponent. You can choose number of
              points necessary to win the match - 21 (standard) or 15 or even 11
              for more dynamic speed of tournament. To change partners faster we
              play only one set to win the match.
            </p>
            <br></br>
            <p>
              Depending on available time and how many players you have you can
              add additional rounds.
            </p>
            <br></br>
            <p>
              After every game you submit the score and Kingofthebeach.me will
              calculate the winners table. When the tournament is finished,
              download the results to share them with friends via Whatsapp or
              Messenger.
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
          {gameResultsAreSubmitted && (
            <ResultsBrandHeader exporting={isExportingResults} />
          )}
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
                        pl={1}
                        pr={1}
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
                        pl={1}
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
                  size="medium"
                  variant="outlined"
                  onClick={downloadResults}
                  startIcon={<DownloadIcon />}
                  sx={{
                    borderColor: 'rgba(92, 61, 0, 0.35)',
                    color: '#5c3d00',
                    fontWeight: 500,
                    '&:hover': {
                      borderColor: 'rgba(92, 61, 0, 0.55)',
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
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
            {playersAreSubmitted && (
              <Suspense fallback={null}>
                <SimpleBottomNavigation
                  onRestart={handleRestartDialog}
                  gameResultsAreSubmitted={gameResultsAreSubmitted}
                />
              </Suspense>
            )}
          </Grid>
        </Grid>

        {isRestartDialogOpen && (
          <Suspense fallback={null}>
            <RestartDialog onChange={handleRestartDialog} />
          </Suspense>
        )}
      </Container>
      </main>
      <Analytics />
    </>
  );
}

export default App;
