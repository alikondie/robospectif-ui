import React, { useState } from 'react';

const GeneralInfosForm = (props) => {
  const [infos, setInfos] = useState(props.infos);

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onAnimatorChange = (e) => {
    const animator = e.target.value;
    setInfos({ animator });
  };
  const onContextChange = (e) => {
    const context = e.target.value;
    setInfos({ context });
  };
  const onObservationsChange = (e) => {
    const observations = e.target.value;
    setInfos({ observations });
  };
  const onSetupChange = (e) => {
    const setup = e.target.value;
    setInfos({ setup });
  };
  const onAcceptanceChange = (e) => {
    const acceptanceOftheGame = e.target.value;
    setInfos({ acceptanceOftheGame });
  };
  const onAttitudesChange = (e) => {
    const attitudes = e.target.value;
    setInfos({ attitudes });
  };
  const onLudicAspectsChange = (e) => {
    const ludicAspects = e.target.value;
    setInfos({ ludicAspects });
  };
  const onExchangesChange = (e) => {
    const exchanges = e.target.value;
    setInfos({ exchanges });
  };
  const onvaProblematicsChange = (e) => {
    const vaProblematics = e.target.value;
    setInfos({ vaProblematics });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Date de la partie : 15/01/2019</h2>

        <h2>Nombre de joueurs : 4</h2>

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
        <textarea value={infos.setup} onChange={onSetupChange}></textarea>

        <br />

        <label>Rapport aux règles de jeu</label>
        <textarea
          value={infos.acceptanceOftheGame}
          onChange={onAcceptanceChange}
        ></textarea>

        <br />

        <label>Attitude individuelle face au jeu</label>
        <textarea
          value={infos.attitudes}
          onChange={onAttitudesChange}
        ></textarea>

        <br />

        <label>Aspect ludique de la partie</label>
        <textarea
          value={infos.ludicAspects}
          onChange={onLudicAspectsChange}
        ></textarea>

        <br />

        <label>Richesse des échanges</label>
        <textarea
          value={infos.exchanges}
          onChange={onExchangesChange}
        ></textarea>

        <br />

        <label>Problématiques du VA soulevées dans les débats</label>
        <textarea
          value={infos.vaProblematics}
          onChange={onvaProblematicsChange}
        ></textarea>

        <br />

        <button>Valider</button>
      </form>
    </div>
  );
};

export default GeneralInfosForm;
