export const statsToStore = (stats) => {
  return {
    date: stats.date,
    numberOfPlayers: stats.numberOfPlayers,
    animator: stats.animator,
    context: stats.context,
    observation: stats.observation,
    gameObservations: {
      setup: stats.setup,
      acceptanceOftheGame: stats.acceptanceOftheGame,
      attitudes: stats.attitudes,
      ludicAspects: stats.ludicAspects,
      exchanges: stats.exchanges,
      vaProblematics: stats.vaProblematics,
    },
  };
};
