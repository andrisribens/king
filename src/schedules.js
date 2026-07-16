/**
 * Schedule templates use player slot numbers 1–8.
 * Resolve to names with resolveSchedule(template, players).
 *
 * Round cutoffs:
 * - 4 players: 1→3 games, 2→6, 3→9, 4→12 (full)
 * - 5 players: 1→5 games, 2→10, 3→15 (full)
 * - 6–8 players: single full round
 */

export const FOUR_PLAYER_SCHEDULE = [
  { gameNo: 1, team1: [1, 4], team2: [2, 3] },
  { gameNo: 2, team1: [1, 3], team2: [2, 4] },
  { gameNo: 3, team1: [1, 2], team2: [3, 4] },
  { gameNo: 4, team1: [2, 3], team2: [1, 4] },
  { gameNo: 5, team1: [2, 4], team2: [1, 3] },
  { gameNo: 6, team1: [3, 4], team2: [1, 2] },
  { gameNo: 7, team1: [1, 4], team2: [2, 3] },
  { gameNo: 8, team1: [1, 3], team2: [2, 4] },
  { gameNo: 9, team1: [1, 2], team2: [3, 4] },
  { gameNo: 10, team1: [2, 3], team2: [1, 4] },
  { gameNo: 11, team1: [2, 4], team2: [1, 3] },
  { gameNo: 12, team1: [3, 4], team2: [1, 2] },
];

export const FIVE_PLAYER_SCHEDULE = [
  { gameNo: 1, team1: [1, 2], team2: [3, 4] },
  { gameNo: 2, team1: [2, 3], team2: [4, 5] },
  { gameNo: 3, team1: [1, 4], team2: [3, 5] },
  { gameNo: 4, team1: [1, 5], team2: [2, 4] },
  { gameNo: 5, team1: [1, 3], team2: [2, 5] },
  { gameNo: 6, team1: [1, 4], team2: [2, 3] },
  { gameNo: 7, team1: [2, 4], team2: [3, 5] },
  { gameNo: 8, team1: [1, 3], team2: [4, 5] },
  { gameNo: 9, team1: [1, 4], team2: [2, 5] },
  { gameNo: 10, team1: [1, 2], team2: [3, 5] },
  { gameNo: 11, team1: [1, 3], team2: [2, 4] },
  { gameNo: 12, team1: [3, 4], team2: [2, 5] },
  { gameNo: 13, team1: [1, 5], team2: [3, 4] },
  { gameNo: 14, team1: [1, 2], team2: [4, 5] },
  { gameNo: 15, team1: [1, 5], team2: [2, 3] },
];

export const SIX_PLAYER_SCHEDULE = [
  { gameNo: 1, team1: [3, 6], team2: [1, 2] },
  { gameNo: 2, team1: [6, 2], team2: [5, 3] },
  { gameNo: 3, team1: [4, 3], team2: [2, 5] },
  { gameNo: 4, team1: [2, 4], team2: [3, 1] },
  { gameNo: 5, team1: [1, 5], team2: [6, 4] },
  { gameNo: 6, team1: [1, 2], team2: [4, 5] },
  { gameNo: 7, team1: [5, 3], team2: [1, 4] },
  { gameNo: 8, team1: [2, 5], team2: [6, 1] },
  { gameNo: 9, team1: [3, 1], team2: [5, 6] },
  { gameNo: 10, team1: [6, 4], team2: [2, 3] },
  { gameNo: 11, team1: [3, 6], team2: [4, 5] },
  { gameNo: 12, team1: [6, 2], team2: [1, 4] },
  { gameNo: 13, team1: [1, 5], team2: [2, 3] },
  { gameNo: 14, team1: [4, 3], team2: [6, 1] },
  { gameNo: 15, team1: [2, 4], team2: [5, 6] },
];

export const SEVEN_PLAYER_SCHEDULE = [
  { gameNo: 1, team1: [4, 7], team2: [5, 6] },
  { gameNo: 2, team1: [2, 3], team2: [4, 5] },
  { gameNo: 3, team1: [1, 5], team2: [2, 6] },
  { gameNo: 4, team1: [4, 6], team2: [1, 3] },
  { gameNo: 5, team1: [2, 5], team2: [1, 6] },
  { gameNo: 6, team1: [4, 7], team2: [1, 2] },
  { gameNo: 7, team1: [3, 6], team2: [1, 4] },
  { gameNo: 8, team1: [2, 3], team2: [6, 7] },
  { gameNo: 9, team1: [1, 5], team2: [3, 7] },
  { gameNo: 10, team1: [1, 7], team2: [3, 5] },
  { gameNo: 11, team1: [4, 6], team2: [5, 7] },
  { gameNo: 12, team1: [2, 5], team2: [3, 4] },
  { gameNo: 13, team1: [3, 6], team2: [2, 7] },
  { gameNo: 14, team1: [1, 7], team2: [2, 4] },
];

export const EIGHT_PLAYER_SCHEDULE = [
  { gameNo: 1, team1: [1, 2], team2: [3, 4] },
  { gameNo: 2, team1: [5, 6], team2: [7, 8] },
  { gameNo: 3, team1: [1, 5], team2: [2, 6] },
  { gameNo: 4, team1: [3, 7], team2: [4, 8] },
  { gameNo: 5, team1: [1, 7], team2: [2, 8] },
  { gameNo: 6, team1: [3, 5], team2: [4, 6] },
  { gameNo: 7, team1: [1, 3], team2: [5, 7] },
  { gameNo: 8, team1: [2, 4], team2: [6, 8] },
  { gameNo: 9, team1: [1, 8], team2: [3, 6] },
  { gameNo: 10, team1: [2, 7], team2: [4, 5] },
  { gameNo: 11, team1: [1, 4], team2: [5, 8] },
  { gameNo: 12, team1: [2, 3], team2: [6, 7] },
  { gameNo: 13, team1: [1, 6], team2: [4, 7] },
  { gameNo: 14, team1: [2, 5], team2: [3, 8] },
];

function playerName(players, slot) {
  return players[`player${slot}`];
}

export function resolveSchedule(template, players) {
  return template.map((game) => ({
    gameNo: game.gameNo,
    team1FirstPlayer: playerName(players, game.team1[0]),
    team1SecondPlayer: playerName(players, game.team1[1]),
    team2FirstPlayer: playerName(players, game.team2[0]),
    team2SecondPlayer: playerName(players, game.team2[1]),
  }));
}

/**
 * @param {number|string} playerCount
 * @param {{ addSecondRound: boolean, addThirdRound: boolean, addFourthRound: boolean }} rounds
 * @param {Record<string, string>} players
 */
export function getActualSchedule(playerCount, rounds, players) {
  const { addSecondRound, addThirdRound, addFourthRound } = rounds;
  const count = Number(playerCount);

  let template;
  if (count === 4) {
    const maxGame = addFourthRound
      ? 12
      : addThirdRound
        ? 9
        : addSecondRound
          ? 6
          : 3;
    template = FOUR_PLAYER_SCHEDULE.filter((game) => game.gameNo <= maxGame);
  } else if (count === 5) {
    const maxGame = addThirdRound ? 15 : addSecondRound ? 10 : 5;
    template = FIVE_PLAYER_SCHEDULE.filter((game) => game.gameNo <= maxGame);
  } else if (count === 6) {
    template = SIX_PLAYER_SCHEDULE;
  } else if (count === 7) {
    template = SEVEN_PLAYER_SCHEDULE;
  } else if (count === 8) {
    template = EIGHT_PLAYER_SCHEDULE;
  } else {
    template = [];
  }

  return resolveSchedule(template, players);
}
