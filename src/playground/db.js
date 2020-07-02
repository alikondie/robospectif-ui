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
        ludicAspects: '',
        exchanges: '',
        vaProblematics: '',
      },
    },
    players: {
      player1: {
        id: 1,
        name: '',
        description: '',
        rejectedCards: {
          dimension: '',
          locomotion: '',
          equipments: '',
        },
      },
      player2: {
        id: 2,
        name: '',
        description: '',
        rejectedCards: {
          dimension: '',
          locomotion: '',
          equipments: '',
        },
      },
      player3: {
        id: 3,
        name: '',
        description: '',
        rejectedCards: {
          dimension: '',
          locomotion: '',
          equipments: '',
        },
      },
      player2: {
        id: 4,
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
            player: 1,
            character: '',
            environment: '',
            proposedUsage: '',
            ReceivedArguments: [
              {
                player: 2,
                token: '',
                debate: '',
              },
              {
                player: 2,
                token: '',
                debate: '',
              },
            ],
          },
          {
            player: 2,
            character: '',
            environment: '',
            proposedUsage: '',
            ReceivedArguments: [
              {
                player: 3,
                token: '',
                debate: '',
              },
              {
                player: 1,
                token: '',
                debate: '',
              },
            ],
          },
        ],
      },
    ],
  },
};
