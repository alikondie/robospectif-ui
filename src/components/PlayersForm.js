import React from 'react';

const PlayersForm = (props) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Date de la partie {infos.date}</h2>

        <h2>Nombre de joueurs : {infos.players}</h2>

        <label>Animateur</label>
        <input
          type='text'
          placeholder='Animateur'
          autoFocus
          value={infos.animator}
          onChange={onAnimatorChange}
        ></input>

        <br />

        <label>Contexte de la partie</label>
        <textarea value={infos.context} onChange={onContextChange}></textarea>

        <br />

        <label>Observations</label>
        <textarea
          value={infos.observations}
          onChange={onObservationsChange}
        ></textarea>

        <br />

        <h2>Remarques générales</h2>
        <label>Mise en place</label>
        <textarea
          value={infos.gameObservations.setup}
          onChange={onSetupChange}
        ></textarea>

        <br />

        <label>Rapport aux règles de jeu</label>
        <textarea
          value={infos.gameObservations.acceptanceOftheGame}
          onChange={onAcceptanceChange}
        ></textarea>

        <br />

        <label>Attitude individuelle face au jeu</label>
        <textarea
          value={infos.gameObservations.attitudes}
          onChange={onAttitudesChange}
        ></textarea>

        <br />

        <label>Aspect ludique de la partie</label>
        <textarea
          value={infos.gameObservations.ludicAspects}
          onChange={onLudicAspectsChange}
        ></textarea>

        <br />

        <label>Richesse des échanges</label>
        <textarea
          value={infos.gameObservations.exchanges}
          onChange={onExchangesChange}
        ></textarea>

        <br />

        <label>Problématiques du VA soulevées dans les débats</label>
        <textarea
          value={infos.gameObservations.vaProblematics}
          onChange={onvaProblematicsChange}
        ></textarea>

        <br />

        <button>Valider</button>
      </form>
    </div>
  );
};
