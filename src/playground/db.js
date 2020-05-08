const db = {
  game: {
    stats: {
      date: 456,
      players: 6,
      animator: 1,
      context: '',
      observation: '',
      gameObservations: {
        setup: '',
        acceptanceOftheGame: '',
        attitudes: '',
        LudicAspects: '',
        Exchanges: '',
        VAProblematics: '',
      },
    },
    players: {
      player1: {
        name: '',
        description: '',
        rejectedCards: {
          dimension: '',
          locomotion: '',
          equipments: '',
        },
      },
      player2: {
        name: '',
        description: '',
        rejectedCards: {
          dimension: '',
          locomotion: '',
          equipments: '',
        },
      },
      player3: {
        name: '',
        description: '',
        rejectedCards: {
          dimension: '',
          locomotion: '',
          equipments: '',
        },
      },
      player2: {
        description: '',
        rejectedCards: {
          dimension: '',
          locomotion: '',
          equipments: '',
        },
      },
      player1: null,
    },
    turns: [
      {
        no: 1,
        conceptor: 1,
        car: {
          dimension: '',
          locomotion: '',
          automation: '',
          equipments: [],
        },
        debates: [
          {
            player: players.player1,
            character: '',
            environment: '',
            proposedUsage: '',
            ReceivedArguments: [
              {
                player: players.player1,
                token: '',
                debate: '',
              },
              {
                player: players.player2,
                token: '',
                debate: '',
              },
            ],
          },
          {
            player: players.player1,
            character: '',
            environment: '',
            proposedUsage: '',
            ReceivedArguments: [
              {
                player: players.player1,
                token: '',
                debate: '',
              },
              {
                player: players.player2,
                token: '',
                debate: '',
              },
            ],
          },
        ],
      },
      {},
    ],
  },
};
