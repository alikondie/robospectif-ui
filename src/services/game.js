import { authHeader } from './auth';
export const uploadStats = async (stats) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: authHeader().Authorization,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(stats),
  };

  const response = await fetch(
    'https://robospectif-api.herokuapp.com/games',
    requestOptions
  );
  const data = await response.json();
  return data;
};

export const uploadPlayers = async (game, players) => {
  const playersToUpload = players.map((player) => ({
    ...player,
    game: game.game._id,
  }));

  const playersUploaded = await Promise.all(
    playersToUpload.map(async (player) => {
      const requestOptions = {
        method: 'POST',
        headers: {
          Authorization: authHeader().Authorization,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(player),
      };
      const response = await fetch(
        'https://robospectif-api.herokuapp.com/players',
        requestOptions
      );
      const data = await response.json();

      return { _id: data.player._id, inGameId: player.id };
    })
  );

  return playersUploaded;
};
export const uploadTurns = async (game, players, turns) => {
  const turnsToUpload = turns.map((turn) => ({
    ...turn,
    game: game.game._id,
    player: players.find((player) => player.inGameId === turn.player)._id,
  }));
  try {
    const turnsUploaded = await Promise.all(
      turnsToUpload.map(async (turn) => {
        const requestOptions = {
          method: 'POST',
          headers: {
            Authorization: authHeader().Authorization,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(turn),
        };
        const response = await fetch(
          'https://robospectif-api.herokuapp.com/turns',
          requestOptions
        );
        const data = await response.json();
        return { _id: data.turn._id, inGameId: turn.no };
      })
    );
    return turnsUploaded;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const uploadDebates = async (players, turns, debates) => {
  debates.forEach((debate) => {
    debate.ReceivedArguments.map((argument) => {
      return {
        ...argument,
        player: players.find((player) => player.inGameId === argument.player)
          ._id,
      };
    });
  });
  const debatesToUpload = debates.map((debate) => ({
    ...debate,
    turn: turns.find((turn) => turn.inGameId === debate.turn)._id,
    player: players.find((player) => player.inGameId === debate.player)._id,
  }));

  try {
    const debatesUploaded = await Promise.all(
      debatesToUpload.map(async (debate) => {
        const requestOptions = {
          method: 'POST',
          headers: {
            Authorization: authHeader().Authorization,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(debate),
        };
        const response = await fetch(
          'https://robospectif-api.herokuapp.com/debates',
          requestOptions
        );
        const data = await response.json();
        return { _id: data.debate._id, inGameId: debate.id };
      })
    );
    return debatesUploaded;
  } catch (error) {
    return error;
  }
};
