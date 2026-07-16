/**
 * Derive wins and net points from submitted game scores.
 * Scores are matched to players by name (as stored on each game score).
 */
export function computePlayerResults(gameScores, players, playerCount) {
  const count = Number(playerCount) || 0;
  const byName = new Map();

  for (let i = 1; i <= count; i += 1) {
    const name = players[`player${i}`];
    byName.set(name, {
      playerNo: i,
      player: name,
      playerTotalPoints: 0,
      playerTotalWins: 0,
    });
  }

  for (const score of gameScores) {
    const team1Net =
      Number(score.team1Score) - Number(score.team2Score);
    const team2Net = -team1Net;
    const team1Win = team1Net > 0 ? 1 : 0;
    const team2Win = team2Net > 0 ? 1 : 0;

    const apply = (name, net, win) => {
      const result = byName.get(name);
      if (!result) return;
      result.playerTotalPoints += net;
      result.playerTotalWins += win;
    };

    apply(score.team1FirstPlayer, team1Net, team1Win);
    apply(score.team1SecondPlayer, team1Net, team1Win);
    apply(score.team2FirstPlayer, team2Net, team2Win);
    apply(score.team2SecondPlayer, team2Net, team2Win);
  }

  return Array.from(byName.values()).sort((a, b) =>
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
}
